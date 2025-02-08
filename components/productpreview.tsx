"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import animalimg from "@/public/projectimg/animal.png";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductItem } from "@/types";
import Link from "next/link";

export default function ProductPreview(item: ProductItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent" />
        <Image
          src={item.pic1 || animalimg}
          alt={item.title || "Huly App Interface"}
          width={800}
          height={400}
          className="w-full h-auto"
        />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="absolute bottom-4 right-4"
              onClick={() => setIsOpen(true)}
            >
              See More
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto h-[90vh]">
            <ScrollArea className="w-full h-[calc(90vh-4rem)]">
              {" "}
              {/* Set specific height */}
              <Image
                alt={item.title || "Huly App Interface"}
                width={200}
                height={100}
                className="w-full h-auto"
                src={item.pic1 || animalimg}
              />
              <DialogHeader className="flex flex-row pt-2 justify-between items-center">
                <div >
                  <DialogTitle className="text-4xl font-bold">
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg mt-2">
                    {item.catogery}
                  </DialogDescription>
                </div>
                {item.link && item.link !== "" ?
                <Link href={item.link} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                  Visit Website →
                </Link>
                :
                <button className="bg-green-500 text-muted-foreground px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                  Visit Website →
                </button>
                }
              </DialogHeader>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">Solution</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.solution}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">Challange</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.challange}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">Results</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.results}
                </p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
      {/* Glow effect */}
      <div className="absolute -inset-x-20 top-0 h-[500px] bg-gradient-conic opacity-30 blur-3xl" />
    </div>
  );
}
