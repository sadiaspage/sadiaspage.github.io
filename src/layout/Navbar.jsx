import Popup from '@/sections/Illustrations';

const navLinks = [
    { id: 1, href: '#about', label: 'About', img: 'tbd1'},
    { id: 2, href: '#illustrations', label: 'Illustrations', img: 'tbd2'},
    { id: 3, href: '#projects', label: 'Projects', img: 'tbd3'},
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent py-10">
            <nav className="container mx-auto px-10 justify-between">
                <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
                    LOGO
                </a>
                <div className='flex'>
                    <div className='px-2 py-1 gap-1'>
                        {navLinks.map((link) => (
                            <div key={link.id} className='py-10 text-sm text-muted-foreground hover:text-foreground hover:bg-surface'><a href={link.href}>{link.label}</a></div>
                        ))}
                    </div>
                </div>
                <Popup>
                    <h3>My popup</h3>
                </Popup>
            </nav>
        </header>
    );
};