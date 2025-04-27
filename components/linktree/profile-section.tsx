"use client";

import { motion } from "framer-motion";
import { ProfileType } from "@/lib/types";
import { Avatar } from "./avatar";

type ProfileSectionProps = {
  profile: ProfileType;
};

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Avatar profile={profile} />
      </motion.div>
      
      <motion.h1 
        className="mt-4 text-2xl font-bold text-foreground sm:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {profile.name}
      </motion.h1>
      
      <motion.p 
        className="mt-2 max-w-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {profile.bio}
      </motion.p>
    </div>
  );
}