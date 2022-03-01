import React from "react";
import Container from "./components/layout/Container";
import Content from "./components/layout/Content";
import Sidebar from "./components/layout/Sidebar";
import Widgets from "./components/layout/Widgets";

function Twitter() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
}

export default Twitter;
