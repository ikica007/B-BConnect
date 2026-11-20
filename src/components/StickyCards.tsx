"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { cn } from "../lib/utils";

interface CardData {
  id: number | string;
  image?: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full bg-transparent py-24", className)} ref={container}>
      <div className="sticky-cards relative flex h-[100vh] w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[80%] w-full max-w-sm overflow-hidden rounded-2xl sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={cn(
                "absolute h-full w-full rounded-2xl bg-navy-800 border-2 border-dashed border-navy-700 flex items-center justify-center text-coolgray overflow-hidden",
                imageClassName,
              )}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            >
              {card.image ? (
                <img src={card.image} alt={card.alt} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-8">
                  <p className="text-xl font-light mb-2">Prazan prostor za sliku</p>
                  <p className="text-sm opacity-50">Card {i + 1}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function StickyCards() {
  const defaultCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div id="zusammenarbeit" className="h-full w-full">
      <StickyCard002 cards={defaultCards} />
    </div>
  );
}
