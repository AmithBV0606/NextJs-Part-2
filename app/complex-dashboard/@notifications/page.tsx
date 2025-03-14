import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <h1>Notifications page</h1>

        <div className="underline cursor-pointer">
          <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </div>
      </div>
    </Card>
  );
}