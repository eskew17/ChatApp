import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-red-500 h-full">{children}</div>;
}

export default AuthLayout;
