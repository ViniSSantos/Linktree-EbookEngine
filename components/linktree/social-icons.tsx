"use client";

import { motion } from "framer-motion";
import { 
  Twitter, 
  Github, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  Globe
} from "lucide-react";
import { SocialLinkType } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  twitter: <Twitter className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  default: <Globe className="h-5 w-5" />
};

type SocialIconsProps = {
  socialLinks: SocialLinkType[];
};

export function SocialIcons({ socialLinks }: SocialIconsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label={`Visit ${link.platform}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          {iconMap[link.platform] || iconMap.default}
        </motion.a>
      ))}
    </div>
  );
}