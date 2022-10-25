import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";

const cx = classNames.bind(styles);

function Sidebar() {
    const [listItem, setListItem] = useState([]);

    const handleAddItem = () => {
        const newListItem = [...listItem]
        const id = uuidv4();
        newListItem.push({id})
        setListItem(newListItem);
    };

    const handleDelete = (indexToDelete) => {
        const newListItem = [...listItem];
        newListItem.splice(indexToDelete,1);
        setListItem(newListItem);
    };

    return (
        <div className={cx("sidebar")}>
            <div className={cx("sign")} onClick={handleAddItem}>
                <div>Chữ ký</div>
            </div>
            {listItem.map((item,index) => (
                <Draggable
                    key={item.id}
                    handle=".handle"
                    defaultPosition={{ x: index*20, y: index*20 }}
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
