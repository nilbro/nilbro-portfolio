const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card p-4 shadow-lg rounded-lg bg-ide-background border border-ide-comments">
                        <h3 className="text-lg font-semibold text-ide-blue mb-2">Project Title</h3>
                        <p className="text-ide-foreground mb-4">Project description goes here.</p>
                    </div>
                    {/* Add more project cards as needed */}
                </div>
            </div>
        </section>
    );
};

export default Projects;