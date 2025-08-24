import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";

export function NavbarSheet() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu className="text-2xl" aria-label="Open Menu" />
      </SheetTrigger>

      <SheetContent className="p-6">
        <SheetHeader>
          <SheetTitle className="text-2xl font-sora-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col mt-6 gap-6 font-sora-regular">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={`py-2 px-3 rounded-md transition-colors duration-300 ${
                  pathname === link.href
                    ? "font-bold text-indigo-600"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </div>

        <div className="mt-6">
          <SheetClose asChild>
            <a
              href="/Aytac_Balayeva_CV.pdf"
              download
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <span>Resume</span>
              <FiDownload />
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
