import React from "react";
import { Title, SidebarTriggerButton, Sidebar } from "../../components/exports";
import { GiHamburgerMenu } from "react-icons/gi";

const CoursePage = (props) => {
  return (
    <>
      <Sidebar data={props.breakpoints} />
      <main>
        <Title>{props.title}</Title>
        <div>{props.children}</div>
      </main>
      <SidebarTriggerButton icon={<GiHamburgerMenu />} />
    </>
  );
};

export default CoursePage;
