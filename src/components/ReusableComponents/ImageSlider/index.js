import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import imgMountainsWide from "../../../assets/image/imgMountainsWide.jpg";
import imgSnowWide from "../../../assets/image/imgSnowWide.jpg";
import imgWideNature from "../../../assets/image/imgWideNature.jpg";
let tempArray = [imgMountainsWide, imgSnowWide, imgWideNature];

export const ImageSlider = ({ children, content }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((preValue) => (preValue + 1) % tempArray.length);
    }, 3000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid black",
        height: "200px",
        textAlign: "center",
      }}
    >
      <div>
        <img src={tempArray[index]} style={{ width: "80%" }} />
        <div style={{ textAlign: "center" }}>
          {tempArray.map((_, index) => (
            <span
              key={index}
              className={styles.dot}
              onClick={() => setIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
