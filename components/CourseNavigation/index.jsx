import { Layout, Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
import styles from "./styles.module.css";

const CourseNavigation = () => {
  const { shouldOpen } = useSelector((state) => state.sidebar);
  return (
    <>
      {shouldOpen && (
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            className={styles.sider}
          >
            <SubMenu key="sub1" title="Introduction">
              <Item onClick={() => console.log("clicked really")} key="1">
                Paragraph
              </Item>
              <Item key="2">Headings</Item>
              <Item key="3">Links</Item>
              <Item key="4">Images</Item>
            </SubMenu>
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default CourseNavigation;
