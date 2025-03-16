
import { SiProsieben, SiRtl, SiBosch, SiInfosys } from 'react-icons/si';

const Experiences = () => {
    return (
        <section id="experiences" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Experiences</h2>
                <div className="relative border-l border-ide-comments">
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-ide-yellow rounded-full mt-1.5 -left-1.5 border border-ide-comments"></div>
                        <div className="card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                            <div className="flex items-center mb-2">
                                <SiProsieben className="text-2xl text-red-600 mr-2" />
                                <h3 className="text-lg font-semibold text-ide-white">Data/ML Engineer | Tech Lead</h3>
                            </div>
                            <p className="text-ide-white mb-1"><span className="text-ide-white">ProSiebenSat.1 Media SE</span>, Munich</p>
                            <p className="text-ide-white mb-1">April 2023 - Present</p>
                        </div>
                    </div>
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-ide-yellow rounded-full mt-1.5 -left-1.5 border border-ide-comments"></div>
                        <div className="card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                            <div className="flex items-center mb-2">
                                <SiRtl className="text-2xl text-purple-500 mr-2" />
                                <h3 className="text-lg font-semibold text-ide-white">Data Engineer</h3>
                            </div>
                            <p className="text-ide-white mb-1"><span className="text-ide-white">RTL Deutschland</span>, Cologne</p>
                            <p className="text-ide-white mb-1">March 2021 - March 2023</p>
                        </div>
                    </div>
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-ide-yellow rounded-full mt-1.5 -left-1.5 border border-ide-comments"></div>
                        <div className="card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                            <div className="flex items-center mb-2">
                                <SiBosch className="text-2xl text-red-600 mr-2" />
                                <h3 className="text-lg font-semibold text-ide-white">Data Engineer Intern</h3>
                            </div>
                            <p className="text-ide-white mb-1"><span className="text-ide-white">Robert Bosch GmbH</span>, Stuttgart</p>
                            <p className="text-ide-white mb-1">March 2020 - June 2020</p>
                        </div>
                    </div>
                    <div className="mb-8 ml-4">
                        <div className="absolute w-3 h-3 bg-ide-yellow rounded-full mt-1.5 -left-1.5 border border-ide-comments"></div>
                        <div className="card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                            <div className="flex items-center mb-2">
                                <SiInfosys className="text-2xl text-blue-200 mr-2" />
                                <h3 className="text-lg font-semibold text-ide-white">Big Data Engineer</h3>
                            </div>
                            <p className="text-ide-white mb-1"><span className="text-ide-white">Infosys Limited</span>, Hyderabad</p>
                            <p className="text-ide-white mb-1">Jun 2016 - Aug 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;