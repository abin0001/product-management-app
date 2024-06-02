import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Product Listing App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        {/* Header content */}
      </header>
      <main className="container mx-auto px-4 py-8">{Component(pageProps)}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        {/* Footer content */}
      </footer>
    </>
  );
}

export default MyApp;
