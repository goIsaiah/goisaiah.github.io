"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { authAxios } from "@/lib/axios";
// import { isAxiosError } from "axios";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <main className="pt-16">
      <div className="grid grid-cols-2 gap-8 px-4 mt-8">

      <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Tracked</CardTitle>
            <div className="mt-4">
              <img
                src="/images/tracked.jpeg"
                alt="Tracked Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              A web-based project management site I created in a team of six for EECS 4314.  A fully functional website that allows users to create
              accounts, projects, tasks, and join projects created by other users.  Users can also assign tasks to each other, as well as see the
              deadlines of all their upcoming tasks for efficient project management.
            </p>
            <div className="mt-4">
              <Link href="http://132.145.109.6/">
                <Button className="mt-2">Website Link</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
      <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">GoBidder</CardTitle>
            <div className="mt-4">
              <img
                src="/images/gobidder.png"
                alt="GoBidder Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              A web-based auction service I helped make in a group of 4 for EECS 4413 - E-Commerce Systems.  The frontend was made using JavaScript, 
              and the backend was programmed using Java, GRPC, and Go.  The system gives you the option to choose between either Dutch auctions or
              Forward auctions.
            </p>
            <div className="mt-4">
              <Link href="https://github.com/KaranpreetRaja/GoBidder">
                <Button className="mt-2">GitHub Page</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">BookMate</CardTitle>
            <div className="mt-4">
              <img
                src="/images/bookmate-image.png"
                alt="BookMate App Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              A library app I made in a group for EECS 2311 - Software Development Project. This app has social media elements with the option to create your own
              profile, add friends, follow users, and rate and review books. Book data was found using JSON files from Google Books, and the online database was written
              using MySQL. The backend was written entirely in Java.
            </p>
            <div className="mt-4">
              <Link href="https://github.com/goIsaiah/LibraryProject">
                <Button className="mt-2">GitHub Page</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Add more cards as needed */}
        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Ready, Set, Go!</CardTitle>
            <div className="mt-4">
              <img
                src="/images/ready-set-go.png"
                alt="Ready Set Go demo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              A reaction based game I made with a partner for EECS 3201 - Digital Logic Design. This game was programmed in Verilog, and used a breadboard for
              LEDs and a buzzer.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="">
                <Button className="mt-2">GitHub Page</Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=gTwqR-72LD8">
                <Button className="mt-2">Video Demo</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Arduino Plant Watering Project</CardTitle>
            <div className="mt-4">
              <img
                src="/images/plant.jpg"
                alt="Plant demo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              A plant watering project I made for EECS 1021 - Object Oriented Programming.  This project used an Arduino board programmed using Firmata4j in order to
              automatically water a plant based on its soil moisture.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="">
                <Button className="mt-2">GitHub Page</Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=Gco_rjUpIhM">
                <Button className="mt-2">Video Demo</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
