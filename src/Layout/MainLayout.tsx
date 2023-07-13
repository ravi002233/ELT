import React from "react";
import { useState } from "react";
import {
  ComponentsProvider,
  Page,
  Layout,
  Section,
  Footer,
  LayoutProps,
} from "@looker/components";
import Header from "../Components/Header/HeaderComponent";
import Tabs from "../Components/Tab/TabComponent";
import { menuList } from "./MenuList";
import Home from "../Home";
import underConstuction from "../Images/under_construction.png";
import { Dashboard } from "../Components/Dashboards/Dashboards";
import { NewDashboard } from "../Components/Dashboards/NewDashboard";

export default function MainLayout(props: LayoutProps) {
  const [currentMenu, setCurrentMenu] = useState({
    tabs: [],
    object: { id: 0, env: "" },
    newObject: {id: 1700, env: "",items: []},
    item: "",
  });
  const changeMenu = (values: any) => {
    console.log("values",values);
    setCurrentMenu(values);
  };

  return (
    <ComponentsProvider>
      <Page>
        <Header menuList={menuList} changeMenu={changeMenu} />
        <Layout>
          <Section style={{ paddingTop: "10px" }}>
            {currentMenu.tabs.length == 0 ? (
              currentMenu.item != "" ? (
                currentMenu.item == "menu" ? (
                  <Dashboard
                    id={currentMenu.object.id}
                    env={currentMenu.object.env}
                  />
                ) : (
                  currentMenu.item == "item" ? (
                    <NewDashboard
                    currentMenu={currentMenu} 
                    />
                  ):
                  <div style={{ textAlign: "center" }}>
                    <img
                      width="60%"
                      height="500vh"
                      src="https://raw.githubusercontent.com/khajamoh/looker-assets/main/No%20Permission%20Image.png"
                    />
                  </div>
                )
              ) : (
                <Home />
              )
            ) : (
              <Tabs currentMenu={currentMenu} />
            )}
          </Section>
        </Layout>
        <Footer height="3rem" px="large">
          Finance Footer
        </Footer>
      </Page>
    </ComponentsProvider>
  );
}
