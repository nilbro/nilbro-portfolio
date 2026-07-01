import { FaPenNib } from 'react-icons/fa';

const Blog = () => {
    return (
        <section id="blog" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Blog</h2>
                <div className="card p-8 shadow-lg rounded-lg bg-ide-dark border border-ide-comments border-dashed flex flex-col items-center text-center">
                    <FaPenNib className="text-4xl text-ide-yellow mb-4" />
                    <h3 className="text-lg font-semibold text-ide-white mb-2">Coming soon</h3>
                    <p className="text-ide-foreground max-w-md">
                        I&apos;m putting together write-ups on recommendation systems, ML infrastructure,
                        and the operational side of applied AI. Check back soon.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
