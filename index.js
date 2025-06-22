
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BridgeDocs - Immigration & Translation Help</title>
        <meta name="description" content="Fast and accurate support for document preparation, USCIS forms, certified translation and apostille services." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Welcome to BridgeDocs</h1>
        <p>Helping immigrants. One document at a time.</p>
      </main>
    </div>
  );
}
