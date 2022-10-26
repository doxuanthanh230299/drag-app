import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function TextArea({  showTextArea }) {
    const [content, setContent] = useState("");

    let Comp = "textarea";
    if (!showTextArea) {
        Comp = "div";
    }
    return (
        <Comp  className={cx('flex')} onChange={(e) => setContent(e.target.value)} value={content}>
            {content}
        </Comp>
    );
}

export default TextArea;
