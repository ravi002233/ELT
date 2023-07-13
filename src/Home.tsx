import { Tabs2, Tab2 } from "@looker/components";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  function DataIQ() {
    var items = [
      {
        name: "Data IQ Portal #1",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/khajamoh/looker-assets/f84fe1dc755ccf7cde61c1206890161e4bf21efb/DQ_Portal_S_1.JPG"
          />
        ),
      },
      {
        name: "Data IQ Portal #2",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/khajamoh/looker-assets/f84fe1dc755ccf7cde61c1206890161e4bf21efb/DQ_Portal_S_2.JPG"
          />
        ),
      },
      {
        name: "Data IQ Portal #3",
        description: "Probably the most random thing you have ever seen!",
        image: (
          <img
            width="75%"
            height="500vh"
            src="https://raw.githubusercontent.com/khajamoh/looker-assets/f84fe1dc755ccf7cde61c1206890161e4bf21efb/DQ_Portal_S_3.JPG"
          />
        ),
      },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <div style={{ textAlign: "center" }}>{item.image}</div>
        ))}
      </Carousel>
    );
  }

  return (
    <>
    <Tabs2>
    <Tab2 id={"1"} label={"Home"}>
    <DataIQ />
    </Tab2>
    <Tab2 id={"2"} label={"DataIQ Self-Service"}>
    <DataIQ />
    </Tab2>
    {/* <Tab2 id={"3"} label={"Whats New Coming"}>
    <DataIQ />
    </Tab2>
    <Tab2 id={"4"} label={"Help"}>
    <DataIQ />
    </Tab2> */}
    </Tabs2>
    </>
  );
}
