import React, { useState, useEffect } from "react";
import { Space, Label } from "@looker/components";
import { Dashboard } from "./Dashboards";
import Tabs from "../Tab/TabComponent";
import setSeconds from "date-fns/fp/setSeconds/index.js";

interface NewDashboardProps {
  currentMenu: any;
}

export function NewDashboard(props: NewDashboardProps) {
  const [sub, setSub] = useState(false);
  const [das, setDas] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [dashValues, setDashValues] = useState({ id: 0, env: "" });
  const menuStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "0.8rem",
    backgroundColor: "#e67001",
    border: "hidden",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const menuStyles1 = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "0.8rem",
    backgroundColor: "#e90000",
    border: "hidden",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };
  useEffect(() => {
    setSub(false);
    setDas(false);
    setSelectedIndex(-1);
  }, [props.currentMenu.clickMenu]);
  const getDashBoard = (value: any, index: any) => {
    setSelectedIndex(index);
    setSub(true);
    if (value.tabs.length == 0) {
      setDas(true);
    } else {
      setDas(false);
    }
    setDashValues(value);
  };
  const menuItems = props.currentMenu.newObject.items.map(
    (items: any, index: any) => (
      <Label onClick={() => getDashBoard(items, index)}>
        <span style={selectedIndex == index ? menuStyles1 : menuStyles}>
          {items.item}
        </span>
      </Label>
    )
  );
  const dash = (
    <Dashboard
      id={props.currentMenu.newObject.id}
      env={props.currentMenu.newObject.env}
    />
  );
  return (
    <>
      <Space style={{ padding: "10px", overflow: "hidden" }} justify="end">
        {menuItems}
      </Space>
      <div style={{ marginTop: "10px", overflow: "hidden" }}>
        {!sub ? (
          dash
        ) : das ? (
          <Dashboard id={dashValues.id} env={dashValues.env} />
        ) : (
          <Tabs currentMenu={dashValues} />
        )}
      </div>
    </>
  );
}
