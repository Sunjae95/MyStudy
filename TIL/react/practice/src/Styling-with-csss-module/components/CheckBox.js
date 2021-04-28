import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.css";
import classNames from "classnames/bind";
//css module을 사용하는 이유
//1. 레거시 프로젝트에 리액트를 도입할 때 2. css클래스네이밍 규칙만들기 귀찮을때

//classname을 편히 쓰기위해
const cx = classNames.bind(styles);

console.log(styles);
function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx("checkBox")}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon")}>
          {/* <div className={styles.icon}> */}
          {/* 여러개 classname을 넣고싶으면 cx('icon', 'blalbla') 이런식으로하면됨*/}
          {checked ? (
            <MdCheckBox className={styles.checked} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
