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
            <div className="mt-4 flex justify-center gap-4">
              <Link href="http://132.145.109.6/">
                <Button className="mt-2">Website Link</Button>
              </Link>
              <Link href="https://github.com/mahfoozm/Tracked">
                <Button className="mt-2">Github Link</Button>
              </Link>
              <Link href="https://youtu.be/Z0fOFuj_dG0">
                <Button className="mt-2">Video Demo</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Star Sync</CardTitle>
            <div className="mt-4">
              <img
                src="/images/starsync.png"
                alt="Star Sync Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              This was my ENG 4000 capstone project I made in a team of 6 for my last year of undergraduate courses.  Star Sync is a fully automated
              satellite-ground station scheduling system, solving complex optimization problems such as satellite visibility and exclusion cone
              policies.  It is also able to schedule up to 100 requests and resolve conflicting requests within 1 minute.  I helped design the
              scheduling algorithm, and worked on various API endpoints.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="https://github.com/Star-Sync">
                <Button className="mt-2">Github Link</Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1V9kzejfKJn7ZGgjFgHar1kVM1mwE3u4I/view?usp=sharing">
                <Button className="mt-2">Video Demo</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Smart Speedometer (OBD2 Scanner)</CardTitle>
            <div className="mt-4">
              <img
                src="/images/obd2.png"
                alt="Smart Speedometer Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-gray-700">
              This was my EECS 3216 final project I made with my brother, Evan.  Our Smart Speedometer is a program that leverages the data
              received from an OBD2 port (which was plugged into the car), and then display it on a DE10-Lite board.  Visual Basic was used to get the
              Bluetooth data from the OB2 port, and Arduino/C was used to send the data to the DE10-Lite, and Verilog was used to display the data on
              the DE10-Lite.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="https://github.com/goIsaiah/EECS3216/tree/main/Final%20Project/OBD2%20Logger">
                <Button className="mt-2">Github Link</Button>
              </Link>
              <Link href="https://youtu.be/t8RRrwd8vqU">
                <Button className="mt-2">Video Demo</Button>
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
