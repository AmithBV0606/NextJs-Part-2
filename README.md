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