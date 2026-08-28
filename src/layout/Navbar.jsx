const navLinks = [
    { href: '#about', label: 'About', img: 'tbd1'},
    { href: '#illustrations', label: 'Illustrations', img: 'tbd2'},
    { href: '#projects', label: 'Projects', img: 'tbd3'},
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent py-10">
            <nav className="container mx-auto px-10 justify-between">
                <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
                    LOGO
                </a>
                <div className='flex'>
                    <div>
                        {navLinks.map((link, index) => (
                            <div key={index} className='py-10'><a href={link.href}>{link.label}</a></div>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};