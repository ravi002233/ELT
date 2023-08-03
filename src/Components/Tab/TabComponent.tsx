import React from "react";
import { Tabs2, Tab2 } from "@looker/components";
import { Dashboard } from "../Dashboards/Dashboards";
import underConstuction from "../../Images/under_construction.png";

interface TabComponentProps {
  currentMenu: any;
}

export default function TabComponent(props: TabComponentProps) {
  const getTabs =
    props.currentMenu.tabs.length !== 0 &&
    props.currentMenu.tabs[0].tab != "" ? (
      <Tabs2>
        {props.currentMenu.tabs.map((tabValue: any, index: any) => (
          <Tab2 id={index} label={tabValue.tab}>
            {tabValue.id ? (
              <Dashboard id={tabValue.id} env={tabValue.env} />
            ) : (
              <div style={{ textAlign: "center" }}>
                <img
                  width="60%"
                  height="500vh"
                  src="https://raw.githubusercontent.com/khajamoh/looker-assets/main/No%20Permission%20Image.png"
                />
              </div>
            )}
          </Tab2>
        ))}
      </Tabs2>
    ) : (
      <Dashboard
        id={props.currentMenu.tabs[0].id}
        env={props.currentMenu.tabs[0].env}
      />
    );
  return <>{getTabs}</>;
}
