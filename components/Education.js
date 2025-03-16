const Education = () => {
    return (
        <section id="education" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Education</h2>
                <div className="flex flex-col items-start space-y-4">
                    <div className="w-full card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                        <h3 className="text-lg font-semibold text-ide-white">M.Eng Embedded Systems for Mechatronics</h3>
                        <p className="text-ide-white mb-1">Fachhochschule Dortmund, Germany</p>
                        <p className="text-ide-white mb-1">2018 - 2021</p>
                    </div>
                    <div className="w-full card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                        <h3 className="text-lg font-semibold text-ide-white">B.Tech Electronics and Communication Engineering</h3>
                        <p className="text-ide-white mb-1">Maulana Abul Kalam Azad University of Technology, India</p>
                        <p className="text-ide-white mb-1">2012 - 2016</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;