const navLinks = [
    { href: '#about', label: 'About', img: 'tbd1'},
    { href: '#illustrations', label: 'Illustrations', img: 'tbd2'},
    { href: '#projects', label: 'Projects', img: 'tbd3'},
];

export const Navbar = () => {
    return <header>
        <nav>
            <a>
                LOGO
            </a>
            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <div><a href={link.href} key={index}>{link.label}</a></div>
                    ))}
                </div>
            </div>
        </nav>
    </header>;
};