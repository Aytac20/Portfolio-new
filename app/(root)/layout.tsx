import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-[85%] mx-auto">
      <Navbar />
      {children}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Aytac Balayeva. All rights reserved.
      </footer>
    </main>
  );
}
