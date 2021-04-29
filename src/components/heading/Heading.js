import React from "react";

export default function Heading({ value }) {
  return (
    <div className="heading">
      <span id="heading-span">{value}</span>
    </div>
  );
}
