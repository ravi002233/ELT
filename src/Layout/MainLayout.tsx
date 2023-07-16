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
    newObject: { id: 0, env: "", items: [] },
    item: "",
    clickMenu: 0
  });
  const [selectedMenu, setSelectedMenu] = useState(-1)

  const changeMenu = (values: any,indexValue:any) => {
    values.clickMenu = currentMenu.clickMenu  + 1;
    setCurrentMenu(values);
    setSelectedMenu(indexValue);
  };

  return (
    <ComponentsProvider>
      <Page style={{ paddingTop: "10px", overflow: "hidden" }}>
        <Header menuList={menuList} changeMenu={changeMenu} selectedMenu={selectedMenu}/>
        <Layout>
          <Section style={{ paddingTop: "10px", overflow: "hidden"}}>
            {currentMenu.tabs.length == 0 ? (
              currentMenu.item != "" ? (
                currentMenu.item == "menu" ? (
                  <Dashboard
                    id={currentMenu.object.id}
                    env={currentMenu.object.env}
                  />
                ) : currentMenu.item == "item" ? (
                  <NewDashboard
                    currentMenu={currentMenu}
                  />
                ) : (
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
          <Footer
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              padding: "15px",
            }}
          >
            <span>By providing your feedback , you make a significant contribution
              through your valuable opinions and insights, enabling us to
              consistently deliver the highest quality products that enhance our
              Looker user experience.  <a
                style={{ color: "white" }}
                target="_blank"
                href="https://forms.office.com/r/KRxtE6Tmd8"
              >
                Click here
              </a></span>
            
          </Footer>
      </Page>
    </ComponentsProvider>
  );
}
