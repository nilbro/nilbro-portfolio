import { FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="p-8 bg-ide-background">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-center mb-6 text-ide-yellow">About Me</h2>
                    <p className="text-center text-lg text-ide-foreground mb-6 leading-relaxed">
                        Hi, I am Nil. I am a software developer with vast experience in building data products in the cloud. 
                        As an AWS Certified Solutions Architect – Associate, I have strong hands-on
                        experience with DevOps, focusing on GitOps, infrastructure as code, and
                        cloud-native operations. I have a growing interest in AI, particularly in fine-tuning LLMs and LLMOps.
                    </p>
                    <div className="flex items-center text-ide-white mb-4">
                        <FaMapMarkerAlt className="mr-2 text-ide-yellow" />
                        <span className="text-ide-yellow">Cologne, Germany</span>
                    </div>
                    <div className="w-full h-64">
                        <img
                            src="images/cologne.jpg"
                            alt="Cologne, Germany"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;