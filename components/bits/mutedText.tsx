import React from "react";

const MutedText = ({ children }: any) => (
  <span style={{ color: "rgba(255, 255, 255, 0.5)", paddingLeft: "4px" }}>
    {children}
  </span>
);

export default MutedText;
