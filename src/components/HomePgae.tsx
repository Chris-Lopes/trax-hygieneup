import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Food Store Reviews</title>
        <meta name="description" content="Read and share reviews on your favorite food stores." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-6">
            <div className="text-2xl font-bold text-blue-600">Food Store Reviews</div>
            <div className="space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>

        <section className="container mx-auto p-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Food Store Reviews</h1>
            <p className="text-lg text-gray-600 mt-4">Discover the best food stores around you through reviews and reports from fellow food enthusiasts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Food Store Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={`/images/store${i}.jpg`} alt={`Food Store ${i}`} width={400} height={250} className="rounded-lg mb-4"/>
                <h2 className="text-xl font-semibold text-gray-800">Food Store {i}</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eros eget urna.</p>
                <a href="#" className="mt-4 block text-blue-600 hover:underline">Read Reviews</a>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="container mx-auto text-center text-gray-600">
            &copy; 2024 Food Store Reviews. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
