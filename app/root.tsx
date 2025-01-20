import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => [
  { title: "Yuhi Residential Property Care | No. 1 Renovation Agency in Dubai, UAE" },
  { name: "description", content: "Yuhi Residential Property Care is the leading renovation agency in Dubai, UAE, specializing in comprehensive residential property care, renovation, and maintenance services." },
  { name: "keywords", content: "Yuhi Residential Property Care, Renovation Agency, Property Care, Dubai, UAE, Residential Renovation, Maintenance Services, Home Improvement, Interior Design, Property Renovation Dubai, High-Quality Renovations, UAE Renovation Experts, Luxury Renovations Dubai, Reliable Property Maintenance, Dubai Home Renovation, Customized Renovations, Premium Property Care, Professional Renovation Services" },
  { property: "og:title", content: "Yuhi Residential Property Care - No. 1 Renovation Agency in Dubai, UAE" },
  { property: "og:description", content: "Transform your living spaces with Yuhi Residential Property Care. Explore our premium renovation and maintenance services tailored to your needs." },
  { property: "og:image", content: "/meta-image-yuhi.png" },
  { property: "og:url", content: "https://yuhiresidential.com" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Yuhi Residential Property Care - Excellence in Renovation" },
  { name: "twitter:description", content: "Discover Yuhi Residential Property Care's exceptional services in property renovation and maintenance, delivering quality you can trust." },
  { name: "twitter:image", content: "/meta-image-yuhi.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
