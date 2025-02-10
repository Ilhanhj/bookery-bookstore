import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import banners1 from "@/assets/banner-1.jpg";
import banners3 from "@/assets/banner-3.jpg";
import banners6 from "@/assets/banner-6.jpg";
import Autoplay from "embla-carousel-autoplay";

function BannersCarousel() {
  const banners = [banners1, banners3, banners6];

  return (
    <Carousel
      className="flex bg-transparent"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent className="">
        {banners.map((banner, index) => (
          <CarouselItem
            className="p-3 pl-7 md:basis-1/2 lg:basis-full lg:p-8 lg:pl-14"
            key={index}
          >
            <Image
              width={800}
              height={800}
              alt={`banner-${index + 1}`}
              src={banner}
              className="w-full rounded-md object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BannersCarousel;
