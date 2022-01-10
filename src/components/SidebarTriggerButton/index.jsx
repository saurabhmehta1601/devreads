import { Button } from "antd";
import React from "react";
import styles from "./styles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/features/SidebarSlice";

const FloatingButton = () => {
  const { shouldOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Button
      size="large"
      type="primary"
      shape="circle"
      className={styles.button}
      icon={<GiHamburgerMenu />}
      onClick={() => dispatch(toggle())}
    />
  );
};

export default FloatingButton;
