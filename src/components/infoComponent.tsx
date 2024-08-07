// 'use client'

// import { NextPage } from 'next';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import { useState } from 'react';
// import Modal from './Modal';


// const StoreDetail: NextPage = () => {

//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => setModalOpen(true);
//   const handleCloseModal = () => setModalOpen(false);

//   return (
//     <>
//       <Head>
//         <title>Food Store Details</title>
//         <meta name="description" content={`Details and reviews for Food Store `} />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="bg-gray-100 min-h-screen">
//         <header className="bg-white shadow-md">
//           <nav className="container mx-auto flex justify-between items-center p-6">
//             <div className="text-2xl font-bold text-blue-600">Food Store Reviews</div>
//             <div className="space-x-4">
//               <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
//               <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
//               <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
//             </div>
//           </nav>
//         </header>

//         <section className="container mx-auto p-6">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800">Food Store </h1>
//             <p className="text-lg text-gray-600 mt-4">Here you can see the detailed information and reviews for this food store.</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
//             <div className="flex justify-between">
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-gray-700">Overall Rating</h3>
//                 <p className="text-lg text-gray-600 mt-2">4.5/5</p>
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-gray-700">Total Reviews</h3>
//                 <p className="text-lg text-gray-600 mt-2">123</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Review Comments</h2>
//             <div className="space-y-4">
//               {/* Example Review Comments */}
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="p-4 border rounded-lg shadow-sm">
//                   <p className="text-gray-800">"Great place with amazing food!"</p>
//                   <p className="text-gray-600 text-sm mt-2">- Reviewer {i}</p>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={handleOpenModal}
//               className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Add a Review
//             </button>
//           </div>
//         </section>

//         <footer className="bg-white border-t border-gray-200 py-6">
//           <div className="container mx-auto text-center text-gray-600">
//             &copy; 2024 Food Store Reviews. All rights reserved.
//           </div>
//         </footer>

//         <Modal open={modalOpen} onClose={handleCloseModal}>
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
//             <textarea
//               rows={4}
//               className="w-full p-2 border rounded-lg mb-4"
//               placeholder="Write your review here..."
//             />
//             <button
//               onClick={handleCloseModal}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </Modal>
//       </main>
//     </>
//   );
// };

// export default StoreDetail;


 // another

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              width={64}
              height={64}
              alt="Store Logo"
              className="rounded-full"
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
            <div>
              <h1 className="text-3xl font-bold">Acme Grocery Store</h1>
              <p className="text-muted-foreground">
                Your one-stop shop for all your grocery needs. Fresh produce, quality meats, and a wide selection of
                pantry items.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">4.2 out of 5</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">123 Main St, Anytown USA</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <ClockIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Mon-Sat: 8am-9pm, Sun: 9am-7pm</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="lg">Visit Store</Button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort">Sort by:</Label>
              <Select id="sort" defaultValue="rating">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-8">
            <Card className="p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">3.2 out of 5</span>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>
                  I've been shopping at Acme Grocery Store for years and they've always had a great selection of fresh
                  produce and high-quality meats. The staff is friendly and helpful, and the store is always clean and
                  well-organized.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <ThumbsUpIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">23 people found this review helpful</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">4.0 out of 5</span>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>
                  I love shopping at Acme Grocery Store! The selection of organic and locally-sourced products is
                  fantastic, and the prices are very reasonable. The store is always clean and well-stocked, and the
                  staff is incredibly helpful and friendly.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <ThumbsUpIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">41 people found this review helpful</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">3.0 out of 5</span>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p>
                  The selection at Acme Grocery Store is decent, but I've found that the prices are a bit higher than
                  some of the other stores in the area. The staff is friendly, but they don't always seem to have the
                  best product knowledge.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <ThumbsUpIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">12 people found this review helpful</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">About Acme Grocery Store</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground">
                Acme Grocery Store has been a fixture in the community for over 50 years. We pride ourselves on
                providing high-quality, fresh produce, meats, and pantry items at reasonable prices. Our knowledgeable
                staff is always on hand to help you find what you need and answer any questions you may have.
              </p>
              <p className="text-muted-foreground mt-4">
                We source our products from local and regional suppliers whenever possible, supporting the local economy
                and reducing our environmental impact. Our commitment to sustainability extends to our store operations
                as well, with energy-efficient lighting, recycling programs, and more.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">
                In addition to our grocery offerings, we also have a full-service deli, bakery, and floral department.
                Our deli features a wide selection of freshly prepared sandwiches, salads, and hot entrees, perfect for
                a quick lunch or dinner. Our bakery offers a tempting array of breads, pastries, and custom-made cakes
                for any occasion.
              </p>
              <p className="text-muted-foreground mt-4">
                We're proud to be a part of the Acme community and to serve our customers with the highest level of
                service and quality. Whether you're stocking up on essentials or looking for something special, we
                invite you to visit Acme Grocery Store and experience the difference for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}