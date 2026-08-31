import Popup from '@/Utilities';
import { Illustrations } from '@/sections/Illustrations';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { useState } from 'react';

const navLinks = [
    { id: 1, href: '#about', label: 'About', img: 'tbd1'},
    { id: 2, href: '#illustrations', label: 'Illustrations', img: 'tbd2'},
    { id: 3, href: '#projects', label: 'Projects', img: 'tbd3'},
];

export const Navbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <header className="fixed top-0 left-0 bg-transparent py-10">
            <nav className="container mx-auto px-10 justify-between">
                <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
                    LOGO
                </a>
                <div className='flex'>
                    <div className='px-2 py-1 gap-1'>
                        <div className='py-10 text-sm text-muted-foreground hover:text-foreground hover:bg-surface'>
                            <button onClick={() => setButtonPopup(true)}>About</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <About></About>
                            </Popup>
                        </div>
                        <div className='py-10 text-sm text-muted-foreground hover:text-foreground hover:bg-surface'>
                            <button onClick={() => setButtonPopup(true)}>Illustrations</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <Illustrations></Illustrations>
                            </Popup>
                        </div>
                        <div className='py-10 text-sm text-muted-foreground hover:text-foreground hover:bg-surface'>
                            <button onClick={() => setButtonPopup(true)}>Projects</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <Projects></Projects>
                            </Popup>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};