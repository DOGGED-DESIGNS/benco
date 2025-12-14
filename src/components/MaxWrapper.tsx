import React from "react";

export default function MaxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-lvh flex flex-col">{children}</div>;
}
