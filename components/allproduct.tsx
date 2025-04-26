"use client";

import { productinfo } from "@/public/info/product-info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel";
import ProductPreview from "./productpreview";
import { ProductItem } from "@/types";
import Autoplay from "embla-carousel-autoplay"

export default function Products() {
  const plugin = Autoplay({ delay: 4000 });
  
  return (
    <section className="container mx-auto px-1  sm:px-4 py-20">
      <div className=" flex px-6 sm:px-10 px-10 sm:px-20 flex-col w-full items-center  justify-center">
        <h1 className="mb-6 text-center text-5xl font-bold leading-tight lg:text-6xl">
          Discover the success stories of our top projects
        </h1>
        <p className="mb-12 text-lg text-gray-300">
          Explore our thoughtfully curated portfolio, highlighting a wide
          variety of industries.
        </p>
      </div>
      <Carousel
      plugins={[plugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {productinfo.map((item: ProductItem) => (
            <CarouselItem key={item.index}>
              <ProductPreview {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
