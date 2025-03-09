import { Counter } from "./counter";

export const metadata = {
  title: "Counter",
};

export default function page() {
  return (
    <div>
      <Counter />
    </div>
  );
}