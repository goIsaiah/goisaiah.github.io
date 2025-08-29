"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { authAxios } from "@/lib/axios";
// import { isAxiosError } from "axios";
// import Link from "next/link";
// import { Worker, Viewer } from '@react-pdf-viewer/core';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Home() {
    const router = useRouter();
    return (
        <main className="pt-16">
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl font-bold invert-text">My Hobbies</h1>
                </div>
            </div>
        </main>
        
    );
}
