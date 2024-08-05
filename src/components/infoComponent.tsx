'use client'

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import Modal from './Modal';


const StoreDetail: NextPage = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Head>
        <title>Food Store Details</title>
        <meta name="description" content={`Details and reviews for Food Store `} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-6">
            <div className="text-2xl font-bold text-blue-600">Food Store Reviews</div>
            <div className="space-x-4">
              <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>

        <section className="container mx-auto p-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Food Store </h1>
            <p className="text-lg text-gray-600 mt-4">Here you can see the detailed information and reviews for this food store.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
            <div className="flex justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">Overall Rating</h3>
                <p className="text-lg text-gray-600 mt-2">4.5/5</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">Total Reviews</h3>
                <p className="text-lg text-gray-600 mt-2">123</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Review Comments</h2>
            <div className="space-y-4">
              {/* Example Review Comments */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border rounded-lg shadow-sm">
                  <p className="text-gray-800">"Great place with amazing food!"</p>
                  <p className="text-gray-600 text-sm mt-2">- Reviewer {i}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleOpenModal}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add a Review
            </button>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="container mx-auto text-center text-gray-600">
            &copy; 2024 Food Store Reviews. All rights reserved.
          </div>
        </footer>

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
            <textarea
              rows={4}
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Write your review here..."
            />
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </Modal>
      </main>
    </>
  );
};

export default StoreDetail;
