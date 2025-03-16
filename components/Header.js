import { FaDownload } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-ide-background text-ide-white p-4">
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-dancing-script">nilbro</h1>
                <a
                    href="docs/cv_patra_nilabhra.pdf"
                    download="Nilabhra_Patra_CV.pdf"
                    className="flex items-center bg-ide-blue text-ide-white px-4 py-2 rounded hover:bg-ide-purple transition duration-300"
                >
                    <FaDownload className="mr-2" />
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;