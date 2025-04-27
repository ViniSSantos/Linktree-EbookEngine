"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LinkType } from "@/lib/types";
import * as LucideIconsImport from "lucide-react";

const LucideIcons = LucideIconsImport as unknown as Record<string, React.ComponentType<{ className?: string }>>;

type LinkButtonProps = {
  link: LinkType;
  index: number;
};

export function LinkButton({ link, index }: LinkButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Dynamically get the icon component
  const IconComponent = link.icon 
    ? LucideIcons[link.icon]
    : LucideIcons.Link;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex w-full items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm",
        "transition-all duration-300 hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
          {IconComponent && <IconComponent className="h-5 w-5" />}
        </div>
        <span className="font-medium text-card-foreground">{link.title}</span>
      </div>
      <motion.div
        animate={{ x: isHovering ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <LucideIcons.ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary" />
      </motion.div>
    </motion.a>
  );
}
