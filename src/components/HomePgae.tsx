import Link from "next/link";

import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import Footer from "./Footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-8 px-6 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Nearby Stores</h2>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Featured Store"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/250", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Acme Bistro</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <StarIcon className="w-5 h-5 fill-primary" />
                <span>4.8</span>
                <span>|</span>
                <span>Italian</span>
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                Acme Bistro offers a delightful dining experience with authentic
                Italian cuisine and a cozy ambiance.
              </p>
              <div className="mt-4">
              <Link href={"/store-info"}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Featured Store"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/250", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Bakery Delights</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <StarIcon className="w-5 h-5 fill-primary" />
                <span>4.9</span>
                <span>|</span>
                <span>Bakery</span>
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                Bakery Delights is a local gem, offering a wide selection of
                freshly baked breads, pastries, and desserts.
              </p>
              <div className="mt-4">
              <Link href={"/store-info"}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Featured Store"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/250", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Healthy Eats</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <StarIcon className="w-5 h-5 fill-primary" />
                <span>4.7</span>
                <span>|</span>
                <span>Healthy</span>
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                Healthy Eats is a modern, health-conscious restaurant offering a
                variety of nutritious and delicious meals.
              </p>
              <div className="mt-4">
                <Link href={"/store-info"}>
      
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Reviews</h2>
            <Link
              href="#"
              className="text-primary hover:underline"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <ReviewCard
              numFilledStars={4}
              avatarSrc="/placeholder-user-2.jpg"
              avatarFallback="JD"
              username="John Doe"
              time="2 weeks ago"
            >
              I recently visited Bakery Delights and was blown away by the
              quality and variety of their baked goods. The croissants were
              flaky and buttery, and the cakes were moist and flavorful. The
              staff was friendly and knowledgeable, and the overall experience
              was fantastic. I'll definitely be a regular customer.
            </ReviewCard>

            <ReviewCard
              numFilledStars={5}
              avatarSrc="/placeholder-user-2.jpg"
              avatarFallback="JD"
              username="John Doe"
              time="2 weeks ago"
            >
              I recently visited Bakery Delights and was blown away by the
              quality and variety of their baked goods. The croissants were
              flaky and buttery, and the cakes were moist and flavorful. The
              staff was friendly and knowledgeable, and the overall experience
              was fantastic. I'll definitely be a regular customer.
            </ReviewCard>

            <ReviewCard
              numFilledStars={3}
              avatarSrc="/placeholder-user-2.jpg"
              avatarFallback="RE"
              username="Reniyas"
              time="2 weeks ago"
            >
              I recently visited Bakery Delights and was blown away by the
              quality and variety of their baked goods. The croissants were
              flaky and buttery, and the cakes were moist and flavorful. The
              staff was friendly and knowledgeable, and the overall experience
              was fantastic. I'll definitely be a regular customer.
            </ReviewCard>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Top Rated</h2>
            <Link
              href="#"
              className="text-primary hover:underline"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Top Rated Store"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Gourmet Delights</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span>4.9</span>
                  <span>|</span>
                  <span>Fine Dining</span>
                </div>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  Gourmet Delights is a renowned fine dining establishment
                  offering an exquisite culinary experience with a focus on
                  locally sourced, seasonal ingredients.
                </p>
                <div className="mt-4">
                <Link href={"/store-info"}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Top Rated Store"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Artisan Bakery</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span>4.8</span>
                  <span>|</span>
                  <span>Bakery</span>
                </div>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  Artisan Bakery is a local gem, offering a wide selection of
                  freshly baked breads, pastries, and artisanal treats made with
                  the finest ingredients.
                </p>
                <div className="mt-4">
                <Link href={"/store-info"}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Top Rated Store"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Organic Oasis</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span>4.7</span>
                  <span>|</span>
                  <span>Organic</span>
                </div>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  Organic Oasis is a health-conscious grocery store offering a
                  wide selection of organic, locally sourced, and sustainable
                  food products.
                </p>
                <div className="mt-4">
                <Link href={"/store-info"}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function StarIcon(props: any) {
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
  );
}

function UserIcon(props: string) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UtensilsIcon(props: string) {
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
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
