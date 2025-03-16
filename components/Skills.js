import { FaPython, FaAws, FaGoogle, FaDocker, FaJava, FaDatabase, FaGitlab } from 'react-icons/fa';
import { SiFastapi, SiTerraform, SiGnubash, SiPostgresql, SiSqlalchemy, SiCloudflare, SiPoetry, SiPytest, SiMongodb, SiInfluxdb, SiGrafana, SiKubernetes, SiApachehive, SiApachespark, SiApachekafka, SiScikitlearn, SiPytorch, SiMlflow, SiDatabricks, SiUv, SiPandas } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Skills and Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <FaPython className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJava className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDatabase className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">SQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiGnubash className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">Bash</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiFastapi className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">FastAPI</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaAws className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">AWS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGoogle className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">GCP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiSqlalchemy className="text-6xl text-ide-red mb-2" />
                        <p className="text-ide-white">SQLAlchemy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiTerraform className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">Terraform</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiCloudflare className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">CloudFormation</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPostgresql className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">PostgreSQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPoetry className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">Poetry</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiUv className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">uv</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPytest className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">Pytest</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMongodb className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDocker className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">Docker</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiKubernetes className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">Kubernetes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiApachespark className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">PySpark</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiApachekafka className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">Kafka</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiApachehive className="text-6xl text-ide-yellow mb-2" />
                        <p className="text-ide-white">Hive</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiInfluxdb className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">InfluxDB</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiGrafana className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">Grafana</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiScikitlearn className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">Scikit-learn</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPytorch className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">PyTorch</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMlflow className="text-6xl text-ide-blue mb-2" />
                        <p className="text-ide-white">MLflow</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiDatabricks className="text-6xl text-ide-green mb-2" />
                        <p className="text-ide-white">Databricks</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGitlab className="text-6xl text-ide-orange mb-2" />
                        <p className="text-ide-white">Gitlab</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiPandas className="text-6xl text-ide-purple mb-2" />
                        <p className="text-ide-white">Pandas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;