"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500"
        />
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
              selectedImage === image
                ? "border-indigo-500 ring-2 ring-indigo-500/40"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              sizes="144px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
