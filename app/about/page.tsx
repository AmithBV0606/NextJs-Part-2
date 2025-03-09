// Static metadata
export const metadata = {
  title: "About Amith",
};

// Dynamic metadata : The metadata that is dependent updon dynamic information like current route parameters.

// Example of dynamic metadata.

export default function About() {
  return <h1 className="text-2xl font-bold">About Me</h1>;
}