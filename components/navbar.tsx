"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl justify-between sm:justify-start items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Labridtech</span>
        </Link>
        <DropdownMenu >
          <DropdownMenuTrigger className="md:hidden">
            <Menu className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
            <Link
            href="#Solution"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link
            href="#Services"
            className="transition-colors hover:text-primary"
          >
            Service
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link
            href="#Testimonials"
            className="transition-colors hover:text-primary"
          >
            Testimonial
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="#Faq" className="transition-colors hover:text-primary">
            Faq
          </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
          <Link
            href="https://github.com/labridtech"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Button
            onClick={() => router.push("/contact")}
            variant="ghost"
            size="sm"
          >
            Contact
          </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Button
            className="!bg-gradient-to-b from-white to-gray-600"
            size="sm"
            onClick={() => router.push("/contact")}
          >
            Get a Demo
          </Button>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className=" flex-1 hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#Solution"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="#Services"
            className="transition-colors hover:text-primary"
          >
            Service
          </Link>
          <Link
            href="#Testimonials"
            className="transition-colors hover:text-primary"
          >
            Testimonial
          </Link>
          <Link href="#Faq" className="transition-colors hover:text-primary">
            Faq
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://github.com/labridtech"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button
            onClick={() => router.push("/contact")}
            variant="ghost"
            size="sm"
          >
            Contact
          </Button>
          <Button
            className="!bg-gradient-to-b from-white to-gray-600"
            size="sm"
            onClick={() => router.push("/contact")}
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
