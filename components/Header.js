import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experiences' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Blog', href: '#blog' },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-ide-background/90 backdrop-blur border-b border-ide-comments">
            <div className="container flex justify-between items-center py-3">
                <a href="#hero" className="text-2xl font-dancing-script text-ide-yellow" onClick={() => setOpen(false)}>
                    nilbro
                </a>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-5 text-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-ide-white hover:text-ide-blue transition duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="/docs/cv_patra_nilabhra.pdf"
                        download="Nilabhra_Patra_CV.pdf"
                        className="text-ide-blue hover:text-ide-purple transition duration-300"
                    >
                        CV
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="sm:hidden text-ide-white text-xl p-1"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav className="sm:hidden border-t border-ide-comments bg-ide-background">
                    <div className="container flex flex-col py-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="py-2 text-ide-white hover:text-ide-blue transition duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/docs/cv_patra_nilabhra.pdf"
                            download="Nilabhra_Patra_CV.pdf"
                            onClick={() => setOpen(false)}
                            className="py-2 text-ide-blue hover:text-ide-purple transition duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
