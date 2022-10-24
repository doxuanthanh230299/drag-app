import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={cx("main")}>
                <Sidebar/>
                    <div className={cx("container")}></div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
