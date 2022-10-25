import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import Draggable from "react-draggable";

const cx = classNames.bind(styles);

function Sidebar() {
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState([]);

    const  handleDelete = (indexToDelete) => {
        console.log(indexToDelete);
    }

    // useEffect(() => {
    //      handleDelete = (index) => {
    //         console.log(index);
    //         counts.splice(index,1);
    //         setCounts(counts);
    //         console.log(counts);
            
    //     };
    // },[counts])

    useEffect(() => {
        setCounts((prev) => [...prev, count]);
        console.log(counts);
    }, [count]);
    return (
        <div className="sidebar">
            <div className={cx("sign")} onClick={() => setCount(count + 1)}>
                <div>Chữ ký</div>
            </div>
            {counts.map((count, index) => (
                <Draggable
                    key={index}
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 30 }}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                >
                    <div className={cx("sign-drag")}>
                        <div className="handle">Chữ ký</div>
                        <div onClick={() => handleDelete(index)}>x</div>
                    </div>
                </Draggable>
            ))}
        </div>
    );
}

export default Sidebar;
