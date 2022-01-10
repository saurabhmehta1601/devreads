import React from "react";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
import styles from "./styles.module.css";
import { close } from "../../redux/features/SidebarSlice";

const CourseNavigation = ({ data }) => {
  const { shouldOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const navigateToItem = (e) => {
    const el = document.querySelector(`[data-name='${e.key}']`);
    el.scrollIntoView({
      behavior: "smooth",
    });
    dispatch(close());
  };

  return (
    <>
      {shouldOpen && (
        <Sider>
          <Menu mode="inline" className={styles.sider}>
            {data &&
              data.map((heading) => {
                return (
                  <SubMenu
                    key={Object.keys(heading)[0]}
                    title={Object.keys(heading)[0]}
                  >
                    {Object.values(heading)[0].map((item) => {
                      return (
                        <Item key={item} onClick={navigateToItem}>
                          {item}
                        </Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default CourseNavigation;
