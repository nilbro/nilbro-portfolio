const Footer = () => {
    return (
        <footer className="bg-ide-background text-ide-white p-4 text-center">
            <div className="container mx-auto">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/nilabhra-p-0092445a/" target="_blank" rel="noopener noreferrer" className="text-ide-blue hover:text-ide-purple">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.88-1.32 2.34-2.5 4-2.5 2.21 0 4 1.79 4 4v7z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/nilbro" target="_blank" rel="noopener noreferrer" className="text-ide-green hover:text-ide-purple">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.82.58 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="mailto:nlbhrptr@hotmail.com" className="text-ide-orange hover:text-ide-purple">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8.713v13.713h24v-13.713l-12 8.713z"/>
                        </svg>
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Nilabhra Patra. All rights reserved.</p>
                <p className="text-xs mt-2">This website is heavily inspired by the legendary Monokai color palette.</p>
            </div>
        </footer>
    );
};

export default Footer;