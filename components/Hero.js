import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaAws } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="pt-16 pb-12 bg-ide-background">
            <div className="container">
                <p className="text-ide-green font-mono text-sm mb-3">Hi, my name is</p>
                <h1 className="text-4xl md:text-5xl font-bold text-ide-white mb-2">Nilabhra Patra</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-ide-yellow mb-5">
                    Software Engineer · AI &amp; Recommendation Systems
                </h2>
                <p className="text-lg text-ide-foreground leading-relaxed mb-6 max-w-2xl">
                    I build real-time recommendation and ML systems, from Kafka event streams to serverless
                    inference. I work across the full stack, and I spend most of my time on how things run in the cloud.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                    <span className="flex items-center text-ide-white">
                        <FaMapMarkerAlt className="mr-2 text-ide-yellow" />
                        Germany
                    </span>
                    <span className="flex items-center text-ide-white">
                        <FaAws className="mr-2 text-ide-orange text-lg" />
                        AWS Certified Solutions Architect – Associate
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href="/docs/cv_patra_nilabhra.pdf"
                        download="Nilabhra_Patra_CV.pdf"
                        className="flex items-center bg-ide-blue text-ide-dark font-semibold px-5 py-2.5 rounded hover:bg-ide-purple transition duration-300"
                    >
                        <FaDownload className="mr-2" />
                        Download CV
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nilbro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center border border-ide-comments text-ide-white px-4 py-2.5 rounded hover:border-ide-blue hover:text-ide-blue transition duration-300"
                    >
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/nilbro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center border border-ide-comments text-ide-white px-4 py-2.5 rounded hover:border-ide-green hover:text-ide-green transition duration-300"
                    >
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a
                        href="mailto:nlbhrptr@hotmail.com"
                        aria-label="Email"
                        className="flex items-center border border-ide-comments text-ide-white px-4 py-2.5 rounded hover:border-ide-orange hover:text-ide-orange transition duration-300"
                    >
                        <FaEnvelope className="mr-2" /> Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
