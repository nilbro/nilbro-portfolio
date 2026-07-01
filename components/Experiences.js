
import { SiProsieben, SiRtl, SiBosch, SiInfosys } from 'react-icons/si';

const experiences = [
    {
        logo: <img src="/images/joyn.svg" alt="Joyn" className="h-5 w-auto" />,
        title: 'Software Engineer (AI / Recommendation Systems)',
        company: 'ProSiebenSat.1 Media SE',
        location: 'Munich, Germany',
        period: 'Jun 2025 – Present',
        bullets: [
            'Architected and delivered a phased migration of the real-time recommendation system from a monolithic GCE instance to decoupled serverless services. Separating Kafka stream processing from inference serving cut deployment complexity, let each service scale on its own, and lowered running costs.',
            'Built recommendation serving for Joyn streaming via REST and GraphQL with Kafka event triggers, partnering with cross-functional stakeholders to define integration patterns.',
            'Established a unified A/B testing and feature-flagging framework with GrowthBook to standardise experimentation infrastructure company-wide.',
            'Contributed to model training pipelines on Vertex AI (Kubeflow) and drove engineering-excellence initiatives: optimised Docker builds, semantic-release automation, Datadog observability, and agentic-coding workflows with Claude.',
        ],
    },
    {
        logo: <SiProsieben className="text-2xl text-red-600" />,
        title: 'Software Engineer (AI / Cloud / Data)',
        company: 'ProSiebenSat.1 Media SE',
        location: 'Munich, Germany',
        period: 'May 2023 – Jun 2025',
        bullets: [
            'Reduced ETL runtime by 70% (5h → 1.5h) by optimising PostgreSQL queries, tuning RDS resources, and orchestrating workflows with AWS Glue and Step Functions.',
            'Accelerated ML development by introducing Metaflow for scalable, reproducible data and training pipelines on AWS and Databricks.',
            'Extended and optimised RESTful APIs with FastAPI and SQLAlchemy, improving performance and robustness on large-scale queries while preserving backwards compatibility.',
            'Championed Terraform and uv to standardise infrastructure-as-code and Python dependency management, and led cross-functional work on internal libraries, Terraform modules, and CI components.',
        ],
    },
    {
        logo: <SiRtl className="text-2xl text-purple-500" />,
        title: 'Data Engineer (Knowledge Engineering)',
        company: 'RTL Deutschland',
        location: 'Cologne, Germany',
        period: 'Mar 2021 – Apr 2023',
        bullets: [
            'Played a key role in launching a new data product from scratch, driving early-stage design, architecture, and engineering decisions.',
            'Designed and evolved a media ontology using Protégé, RDF, SPARQL, and semantic technologies for consistency and extensibility.',
            'Built a Kubernetes-native data pipeline on GCP (BigQuery, Pub/Sub) and maintained reliable graph databases on GKE supporting complex semantic queries at scale.',
        ],
    },
    {
        logo: <SiBosch className="text-2xl text-red-600" />,
        title: 'Data Engineer Intern',
        company: 'Robert Bosch GmbH',
        location: 'Stuttgart, Germany',
        period: 'Mar 2020 – Jun 2020',
        bullets: [
            'Designed and implemented real-time ETL pipelines for an Industry 4.0 use case using MongoDB, Kafka, and Spark Streaming.',
            'Built a real-time monitoring dashboard with InfluxDB and Grafana for streaming sensor data and operational metrics.',
            'Self-hosted and managed the full infrastructure stack, handling deployment, configuration, and maintenance of every pipeline component.',
        ],
    },
    {
        logo: <SiInfosys className="text-2xl text-blue-200" />,
        title: 'Big Data Engineer',
        company: 'Infosys Limited',
        location: 'Hyderabad, India',
        period: 'Jun 2016 – Aug 2018',
        bullets: [
            'Developed and maintained large-scale big data pipelines and ETL workflows for enterprise clients.',
        ],
    },
];

const Experiences = () => {
    return (
        <section id="experiences" className="py-12 bg-ide-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-ide-yellow mb-8">Experience</h2>
                <div className="relative border-l border-ide-comments">
                    {experiences.map((exp, i) => (
                        <div key={i} className="mb-8 ml-4">
                            <div className="absolute w-3 h-3 bg-ide-yellow rounded-full mt-1.5 -left-1.5 border border-ide-comments"></div>
                            <div className="card p-4 shadow-lg rounded-lg bg-ide-dark border border-ide-comments">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                    <div className="flex items-center gap-2">
                                        {exp.logo}
                                        <h3 className="text-lg font-semibold text-ide-white">{exp.title}</h3>
                                    </div>
                                    <span className="text-xs text-ide-muted font-mono">{exp.period}</span>
                                </div>
                                <p className="text-sm text-ide-muted mb-3">
                                    {exp.company} · {exp.location}
                                </p>
                                <ul className="space-y-2">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} className="flex text-sm text-ide-foreground leading-relaxed">
                                            <span className="text-ide-yellow mr-2 mt-0.5">▹</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
