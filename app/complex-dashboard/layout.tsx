import React from "react";
// import UserAnalytics from "path/to/UserAnalytics";
// import RevenueMetrics from "path/to/RevenueMetrics";
// import Notification from "path/to/Notification";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = false;
  
  return isLogin ? (
    // <>
    //   <div>{children}</div>
    //   <UserAnalytics />
    //   <RevenueMetrics />
    //   <Notification />
    // </>

    <div>
      <div>{children}</div>

      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    <div>
      {login}
    </div>
  );
}