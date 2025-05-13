import React from 'react';
import Navbar from '../components/Navbar';
import Items from '../components/Items';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Items />
      </main>
      <Footer />
    </div>
  );
}

export default Home;