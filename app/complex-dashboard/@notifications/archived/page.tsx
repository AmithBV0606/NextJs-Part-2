import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <h1>Archived Notifications page</h1>

        <div className="underline cursor-pointer">
          <Link href={"/complex-dashboard"}>Default</Link>
        </div>
      </div>
    </Card>
  );
}
