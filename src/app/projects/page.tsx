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
import { projects } from "./projects";
import { motion } from "framer-motion";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { authAxios } from "@/lib/axios";
// import { isAxiosError } from "axios";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      {/* Wrapper with staggered animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <Card className="w-full flex flex-col items-center text-center">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <div className="mt-4">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {project.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href={link.href}>
                      <Button className="mt-2">{link.label}</Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
