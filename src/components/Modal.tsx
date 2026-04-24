"use client";

import Image from "next/image";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
  caption?: string;
  video?: string;
}

export default function Modal({ open, onClose, images, caption, video }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4">
      <div className="relative my-8 w-full max-w-lg rounded-lg bg-white p-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="mt-6 space-y-4">
          {video && (
            <video width="100%" controls>
              <source src={video} type="video/mp4" />
            </video>
          )}
          {images.map((src) => (
            <Image key={src} src={src} alt="" width={800} height={600} className="w-full" />
          ))}
          {caption && <p className="mt-4 text-sm">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
