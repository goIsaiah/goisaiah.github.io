"use client";

import { useState } from "react";
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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { authAxios } from "@/lib/axios";
import { isAxiosError } from "axios";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <main className="pt-16">
      <div className="grid grid-cols-2 gap-8 px-4 mt-8">
        {/* Card 1 */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>GoBidder</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for the first card.</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-full flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle className="text-xl font-bold">BookMate</CardTitle>
            <div className="mt-4">
              <img
                src="https://user-images.githubusercontent.com/71765888/231013180-7df2774c-3d98-41f5-8da0-54e2bc4a0cec.png"
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
      </div>
    </main>
  );
}
