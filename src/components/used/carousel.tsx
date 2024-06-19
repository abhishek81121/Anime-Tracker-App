"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import axios from "axios";
import { TopAnimeInterface } from "@/types/topAnime";
import { url } from "inspector";

export function CarouselPlugin() {
  const [carouselSrc, setCarouselSrc] = React.useState([]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  React.useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime").then((reponse) => {
      const resp: TopAnimeInterface = reponse.data;
      const topAnimeNames = [];
      for (let i = 0; i < 10; i++) {
        topAnimeNames.push(resp.data[i].title);
      }

      topAnimeNames.map((data) => {});
    });
  }, []);
  return (
    <Carousel
      plugins={[plugin.current]}
      className="sm:w-2/3 w-10/12  mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1 h-full">
              <div className=" h-full w-full" style={{}}>
                <div className="h-full w-full absolute z-10 hover:bg-gradient-to-r hover:from-transparent hover:to-black"></div>
                <Image
                  width={0}
                  className="rounded-xl hover:bg-gradient-to-r hover:from-transparent hover:to-black"
                  alt="dfa"
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  src="https://image.tmdb.org/t/p/original/96RT2A47UdzWlUfvIERFyBsLhL2.jpg"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
