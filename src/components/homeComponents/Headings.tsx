import React from "react";

export default function Headings({
  heading,
}: Readonly<{
  heading: React.ReactNode;
}>) {
  return (
    <div className="">
      <h1 className="font-bold text-center text-2xl py-4">{heading}</h1>
    </div>
  );
}
