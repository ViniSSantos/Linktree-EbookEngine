"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProfileType } from "@/lib/types";

type AvatarProps = {
  profile: ProfileType;
  className?: string;
};

export function Avatar({ profile, className }: AvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/10 shadow-lg transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          sizes="(max-width: 768px) 100px, 150px"
          priority
          className="object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-28 w-28 animate-pulse rounded-full bg-muted"></div>
        </div>
      )}
    </div>
  );
}