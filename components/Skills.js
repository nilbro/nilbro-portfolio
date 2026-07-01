import { FaPython, FaAws, FaGoogle, FaDocker, FaDatabase, FaGitlab, FaFlask } from 'react-icons/fa';
import {
    SiFastapi, SiTerraform, SiGnubash, SiPostgresql, SiSqlalchemy, SiPytest, SiMongodb,
    SiInfluxdb, SiGrafana, SiKubernetes, SiApachespark, SiApachekafka, SiTensorflow,
    SiPytorch, SiMlflow, SiDatabricks, SiUv, SiPandas, SiSnowflake, SiRedis, SiDatadog,
    SiGraphql, SiPydantic, SiNvidia, SiClaude,
} from 'react-icons/si';

const groups = [
    {
        title: 'Languages',
        skills: [
            { icon: <FaPython className="text-ide-blue" />, name: 'Python' },
            { icon: <FaDatabase className="text-ide-blue" />, name: 'SQL' },
            { icon: <SiGnubash className="text-ide-green" />, name: 'Bash' },
        ],
    },
    {
        title: 'Cloud & Infrastructure',
        skills: [
            { icon: <FaAws className="text-ide-orange" />, name: 'AWS' },
            { icon: <FaGoogle className="text-ide-blue" />, name: 'GCP' },
            { icon: <SiTerraform className="text-ide-purple" />, name: 'Terraform' },
            { icon: <FaDocker className="text-ide-purple" />, name: 'Docker' },
            { icon: <SiKubernetes className="text-ide-blue" />, name: 'Kubernetes' },
            { icon: <FaGitlab className="text-ide-orange" />, name: 'GitLab CI' },
        ],
    },
    {
        title: 'ML & Data Science',
        skills: [
            { icon: <SiPytorch className="text-ide-purple" />, name: 'PyTorch' },
            { icon: <SiTensorflow className="text-ide-orange" />, name: 'TensorFlow' },
            { icon: <SiMlflow className="text-ide-blue" />, name: 'MLflow' },
            { icon: <SiNvidia className="text-ide-green" />, name: 'Triton' },
            { icon: <SiPandas className="text-ide-purple" />, name: 'Pandas' },
            { icon: <FaFlask className="text-ide-green" />, name: 'A/B Testing' },
        ],
    },
    {
        title: 'Data & Streaming',
        skills: [
            { icon: <SiApachekafka className="text-ide-orange" />, name: 'Kafka' },
            { icon: <SiApachespark className="text-ide-green" />, name: 'PySpark' },
            { icon: <SiSnowflake className="text-ide-blue" />, name: 'Snowflake' },
            { icon: <SiDatabricks className="text-ide-green" />, name: 'Databricks' },
        ],
    },
    {
        title: 'Backend & Storage',
        skills: [
            { icon: <SiFastapi className="text-ide-green" />, name: 'FastAPI' },
            { icon: <SiSqlalchemy className="text-ide-red" />, name: 'SQLAlchemy' },
            { icon: <SiPydantic className="text-ide-red" />, name: 'Pydantic' },
            { icon: <SiGraphql className="text-ide-purple" />, name: 'GraphQL' },
            { icon: <SiPostgresql className="text-ide-blue" />, name: 'PostgreSQL' },
            { icon: <SiMongodb className="text-ide-green" />, name: 'MongoDB' },
            { icon: <SiRedis className="text-ide-red" />, name: 'Redis' },
        ],
    },
    {
        title: 'Observability & Tooling',
        skills: [
            { icon: <SiDatadog className="text-ide-purple" />, name: 'Datadog' },
            { icon: <SiGrafana className="text-ide-orange" />, name: 'Grafana' },
            { icon: <SiInfluxdb className="text-ide-purple" />, name: 'InfluxDB' },
            { icon: <SiPytest className="text-ide-purple" />, name: 'Pytest' },
            { icon: <SiUv className="text-ide-green" />, name: 'uv' },
            { icon: <SiClaude className="text-ide-orange" />, name: 'Claude Code' },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-2">Skills &amp; Technologies</h2>
                <p className="text-ide-muted mb-8">Technologies I&apos;ve built with, run in production, or just explored. Grouped by where they live.</p>

                <div className="space-y-8">
                    {groups.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-ide-green mb-4">
                                {group.title}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center text-center">
                                        <span className="text-4xl mb-2">{skill.icon}</span>
                                        <p className="text-xs text-ide-white">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
