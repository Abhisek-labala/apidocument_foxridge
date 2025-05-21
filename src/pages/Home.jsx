import React from 'react';
import Navbar from '../components/Navbar';
import Items from '../components/Items';
import Footer from '../components/Footer';
import StatusCodes from '../components/StatusCodes';
function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Items />
        <StatusCodes/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;