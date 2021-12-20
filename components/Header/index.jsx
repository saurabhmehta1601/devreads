import React, { useRef, useState } from "react";
import { Typography } from "antd";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";

import { RiMusic2Fill, RiMusic2Line } from "react-icons/ri";

export default function Header() {
  const audioRef = useRef();
  const [playMusic, setPlayMusic] = useState(false);
  const handleClick = () => {
    if (audioRef.current) {
      if (!playMusic) audioRef.current.play();
      else audioRef.current.pause();
      setPlayMusic(!playMusic);
    }
  };

  return (
    <header className={styles.header}>
      <Typography.Title level={1} className={styles.title}>
        <Link href="/"> DevReads </Link>
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />
        {playMusic ? (
          <RiMusic2Fill
            onClick={handleClick}
            className={`${styles.musicIcon} ${styles.musicIconActive}`}
          />
        ) : (
          <RiMusic2Line
            onClick={handleClick}
            className={`${styles.musicIcon} 
            }`}
          />
        )}
      </Typography.Title>
    </header>
  );
}
