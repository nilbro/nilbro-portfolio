import Head from 'next/head';
import '../styles/globals.css';

const title = 'Nilabhra Patra · Software Engineer, AI & Recommendation Systems';
const description =
    'Software Engineer working on real-time recommendation and ML systems, from Kafka event streams to serverless inference. I work across the full stack with a focus on cloud and operations. AWS Certified Solutions Architect. Based in Germany.';
const url = 'https://nilbro.github.io';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content="https://nilbro.github.io/images/og.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://nilbro.github.io/images/og.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
