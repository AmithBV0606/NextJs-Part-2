# Next-Js by Codevolution : Part-2

### Topics Covered : 

- Linking Component Navigation
- Active Links
- params and searchParams
- Navigating Programmatically
- Templates
- Loading UI
- Error Handling
- Recovering from Errors
- Handling Errors in Nested Routes
- Handling Errors in Layouts
- Handling Global Errors
- Parallel Routes
- Unmatched Routes
- Conditional Routes
- Intercepting Routes
- Parallel Intercepting Routes
- Route Handlers

### Navigation so far : 

- File based routing system.

- Defining routes for our application's root, nested routes, dynamic routes, and catch-all routes.

- We'e been using typical URL's directly in the browser to test these routes, but that's not how real users navigae the websites.

Users : 
    - Click on links
    - get redirected after certain actions

**UI Navigation :**

<img src="./assets/Pic-1.png" />

### Linking Component Navigation : 

- For cient-side navigation, Next.js gives us the `<Link>` component.

- The `<Link>` component is a React component that extends the HTML `<a>` element, and it's the primary way to navigate between routes in Next.js.

- To use it, we need to import it from "next/link".

**NOTE :** `replace` attribute in `<Link>` component overrides the current history entry, instead of adding a new one.

### Active Links : 

- We need Active links to highlight the current page we're on in the Navbar.

```js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Regster", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="space-y-7 mt-10">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={link.name}
            className={`text-lg mx-4 cursor-pointer p-2 rounded-lg ${
              isActive ? "bg-blue-700" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```