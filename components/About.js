import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">About Me</h2>
                <p className="text-lg text-ide-foreground mb-6 leading-relaxed">
                    I like owning the whole path from data to production. I design the system, build the services,
                    and stay on the hook for keeping them healthy once they ship. Most of my work sits where applied
                    ML meets everyday engineering, on recommendation and streaming systems that have to stay fast
                    and cheap to run.
                </p>
                <p className="text-lg text-ide-foreground mb-6 leading-relaxed">
                    I care about DevOps, infrastructure-as-code, and developer experience as much as the models
                    themselves. The work I enjoy most is taking a system nobody wants to touch and making it
                    something a team can actually reason about.
                </p>
                <div className="flex items-center mb-6 text-lg">
                    <FaMapMarkerAlt className="mr-2 text-ide-yellow" />
                    <span className="text-ide-foreground">Based in Cologne, Germany</span>
                </div>
                <div
                    className="relative w-full rounded-lg overflow-hidden shadow-lg"
                    style={{ paddingBottom: '59.4%' }}
                >
                    <Image
                        src="/images/cologne.jpg"
                        alt="Cologne Cathedral and the Hohenzollern Bridge over the Rhine at dusk"
                        fill
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="object-cover object-center"
                    />
                </div>
                <p className="text-xs text-ide-muted mt-2">
                    Photo:{' '}
                    <a
                        href="https://commons.wikimedia.org/wiki/File:Hohenzollernbr%C3%BCcke_K%C3%B6lner_Dom.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Thomas Wolf
                    </a>
                    ,{' '}
                    <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                        CC BY-SA 3.0
                    </a>
                </p>
            </div>
        </section>
    );
};

export default About;
