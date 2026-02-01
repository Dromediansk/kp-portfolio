// Site configuration - Technical constants only
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage:
    process.env.NEXT_PUBLIC_OG_IMAGE ||
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`,
  creator: "Katarína Pillárová", // Used in metadata authors field
  social: {
    email: "katka.plackova3@gmail.com",
  },
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
