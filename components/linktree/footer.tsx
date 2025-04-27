import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-md pb-8 pt-12 text-center text-sm text-muted-foreground">
      <div className="flex items-center justify-center space-x-4">
        <div>© {new Date().getFullYear()} {siteConfig.name}</div>
        <div className="h-4 w-px bg-border"></div>
        <ThemeToggle />
      </div>
    </footer>
  );
}