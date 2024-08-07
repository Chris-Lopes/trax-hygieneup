"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import StoreNavbar from "./StoreNavbar";
import Footer from "../Footer";

export default function StoreHomePage() {
  return (
    <>
      <StoreNavbar />
      <div className="flex min-h-screen flex-col bg-muted/40">
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <section className="mb-8">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-lg md:flex-row md:items-start md:gap-8">
              <div className="flex-1">
                <h1 className="text-2xl font-bold sm:text-xl">
                  Acme Food Store
                </h1>
                <p className="text-muted-foreground sm:text-sm">
                  Discover the best local food reviews and ratings.
                </p>
              </div>
              <div className="lg:mr-10">
                <Carousel className="w-full max-w-md md:w-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        alt="Store Image 1"
                        width={400}
                        height={300}
                        className="aspect-video w-full rounded-lg object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        alt="Store Image 2"
                        width={400}
                        height={300}
                        className="aspect-video w-full rounded-lg object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        alt="Store Image 3"
                        width={400}
                        height={300}
                        className="aspect-video w-full rounded-lg object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </section>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="sm:text-base">
                  Reviews Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="sm:text-base">Overall Rating</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="text-6xl font-bold sm:text-4xl">4.8</div>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-6 w-6 fill-primary" />
                  <StarIcon className="h-6 w-6 fill-primary" />
                  <StarIcon className="h-6 w-6 fill-primary" />
                  <StarIcon className="h-6 w-6 fill-primary" />
                  <StarIcon className="h-6 w-6 fill-muted stroke-muted-foreground" />
                </div>
                <div className="text-muted-foreground sm:text-sm">
                  Based on 1,234 reviews
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="sm:text-base">Total Reviews</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="text-6xl font-bold sm:text-4xl">1,234</div>
                <div className="text-muted-foreground sm:text-sm">Reviews</div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

interface LinechartChartProps {
  className?: string;
}

function LinechartChart({ className }: LinechartChartProps) {
  return (
    <div className={className}>
      <ChartContainer
        config={{
          desktop: {
            label: "Reviews",
            color: "black",
          },
        }}
      >
        <LineChart
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: IconProps) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function StarIcon(props: IconProps) {
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

function UserIcon(props: IconProps) {
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
