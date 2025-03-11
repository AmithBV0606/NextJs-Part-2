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

### params and searchParams : 

**For a given URL,**

- `params` is a promise that resolves into an object containing dynamic route parameters (like id).

- `searchParams` is a promise that resolves into an object containing query parameters (like filters and sorting).

**NOTE :**

- `params` and `searchParams` can be accessed inside a server component using async function and awaiting the `params` and `searchParams`.

- If you want to access the `params` and `searchParams` in a client component, use the "use" hook, which was introduces in react 19.

- While `page.tsx` has access to both params and searchParams, `layout.tsx` only has access to params.

### Navigating Programmatically : 

<img src="./assets/Pic-2.png" />

- We use `useRouter` hook from "next/navigation", to redirect the user programmatically.

- We can also use `redirect` from "next/navigation".

### Templates : 

- Templates are similar to layouts in that they are also UI shared between multiple pages in your app.

- Whenever a user navigates between routes sharing a template, you get a completely fresh start.

    - A new template component instance is mounted.
    - DOM elements are re-created.
    - States are cleared.
    - Effects are re-synchronized.

- Create a template by exporting aa default React component from a template.js or template.tsx file.

- Like layouts, templates needs to accept a children prop to render the nested route segment.

**DEMO :** 

- Inside the `(auth)/layout.tsx`, add an Input field and store the value entered in the input box inside a state variable.

- Now if you checkout the auth routes, you'll see an Input box.

- Type something in the input box and navigate to other pages by clicking the button below the input box.

- Then you'll notice that the value entered in the input box is persisted accross the navigation. 

- This happens because the layout only mounts new page content, while keeping the common elements intact. They don't re-mount the shared components, which leads to better performance.

- If you don't want the value to be persisted, all we need to do is, re-name the `(auth)/layout.tsx` file into `template.tsx`.

### Loading UI

**Special files :** `page.tsx`, `layout.tsx`, `template.tsx` and `not-found.tsx`.

- `Loading.tsx` is another special file used for loading states.

- This file helps us create loading states that users see while waiting for content to load in a specific route segment.

- The loading states appear instantly when navigating, letting users know that the application is responsive and actively loading content.

- Just create a file called as `loading.tsx` and export a React component called `Loading` which returns an `<h1>` laoding...

- Behind the scenes, Next.js automatically wraps `loading.tsx` file to the `page.tsx` file and it's nested children with in a react suspense boundary.

**Benefits of `loading.tsx` :**

1. It gives users immediate feedback when they navigate somewhere new. This makes your app feel snappy and responsive, and users know their click actually did something.

2. Next.js keeps shared layouts interactive while new content loads. Users can still use things like navigation menus or sidebars even if the main content isn't ready yet.

### Error Handling : 

**Special files :** `page.tsx`, `layout.tsx`, `template.tsx`,`not-found.tsx` and `Loading.tsx`.

- `Error.tsx` is another special file used for error handling.

- It automatically wraps route segments and their nested children in a React Error boundary.

- You can create custom error UIs for specific segments using the file-system hierarchy.

- It isolates errors to affected segments while keeping the rest of your app functional.

- It enables you to attempt to recover from an error without requiring a full page reload.

**Component Hierarchy :**

<img src="./assets/Pic-3.png" />

**Demo :**

```js
// Example for error handling
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review!!!");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="text-2xl">Details about the product</h2>
      <p>Product {productId}</p>
      <p>Review {reviewId}</p>
    </div>
  );
}
```

- Now if you visit the route `http://localhost:3000/products/9/reviews/2` and refresh mulitple times you'll see an Error.

- This Error will break our entire application in production. 

- We need to handle the Error gracefully by containing them to just the affected parts, while keeping the rest of our application running. 

- This can be achieved by creating a seperate file for error handling. 

**NOTE :** `error.tsx` file must be a client component.

### Recovering from Errors : 

- Previously we studied about handling errors gracefully using `error.tsx`.

- While some errors are serious, others might be temporary and can be fixed with a simple retry.

```js
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen w-full">
      <p className="text-2xl font-bold">{error.message}</p>
      <button
        onClick={() => reload()}
        className="bg-white py-2 px-4 text-black font-bold rounded-[5px] cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
```

- `Try again` button gives users a way to retry rendering the component in `page.tsx`.

- `reset()` method attempts to re-render client side. So converting `[reviewId]/page.tsx` into a client component would be a overkill.

- To attempt to server side recovery, we need to rely on `useRouter` and `startTransition` from react.