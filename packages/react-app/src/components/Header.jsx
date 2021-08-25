import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header () {
  return (
    <a href="/" >
      <PageHeader
        title="🤖 RoboAddress"
        subTitle="Sign a message with your wallet to generate a unique image from your address"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
