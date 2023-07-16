import { Tabs2, Tab2 } from "@looker/components";
import React from "react";
import Carousel from "react-material-ui-carousel";
import {Button} from '@mui/material';

export default function Home() {
  function DataIQ() {
    var items = [
      
      {
        name: "slide #1",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide1.PNG" /> ),
      },
      {
        name: "slide #2",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide2.PNG" /> ),
      },

      {
        name: "slide #3",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide3.PNG" /> ),
      },
      {
        name: "slide #4",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide4.PNG" /> ),
      },
      {
        name: "slide #5",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide5.PNG" /> ),
      },
      {
        name: "slide #6",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide6.PNG" /> ),
      },
      {
        name: "slide #7",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide7.PNG" /> ),
      },
      {
        name: "slide #8",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide8.PNG" /> ),
      },
      {
        name: "slide #9",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide9.PNG" /> ),
      },
      {
        name: "slide #10",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide10.PNG" /> ),
      },

      {
        name: "slide #11",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide11.PNG" /> ),
      },
      {
        name: "slide #12",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide12.PNG" /> ),
      },
      {
        name: "slide #13",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide13.PNG" /> ),
      },
      {
        name: "slide #14",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide14.PNG" /> ),
      },
      {
        name: "slide #15",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide15.PNG" /> ),
      },
      {
        name: "slide #16",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide16.PNG" /> ),
      },
      {
        name: "slide #17",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide17.PNG" /> ),
      },
      {
        name: "slide #18",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide18.PNG" /> ),
      },
      {
        name: "slide #19",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide19.PNG" /> ),
      },
      {
        name: "slide #20",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide20.PNG" /> ),
      },
      {
        name: "slide #21",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide21.PNG" /> ),
      },
      {
        name: "slide #22",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide22.PNG" /> ),
      },
      {
        name: "slide #23",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide23.PNG" /> ),
      },
      {
        name: "slide #24",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide24.PNG" /> ),
      },

      {
        name: "slide #25",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide25.PNG" /> ),
      },
      {
        name: "slide #26",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide26.PNG" /> ),
      },
      {
        name: "slide #27",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide27.PNG" /> ),
      },
      {
        name: "slide #28",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide28.PNG" /> ),
      },
      {
        name: "slide #29",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide29.PNG" /> ),
      },
      {
        name: "slide #30",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide30.PNG" /> ),
      },
      {
        name: "slide #31",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide31.PNG" /> ),
      },
      {
        name: "slide #32",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide32.PNG" /> ),
      },
      {
        name: "slide #33",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide33.PNG" /> ),
      },
      {
        name: "slide #34",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide34.PNG" /> ),
      },
      {
        name: "slide #35",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide35.PNG" /> ),
      },
      {
        name: "slide #36",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide36.PNG" /> ),
      },
      {
        name: "slide #37",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide37.PNG" /> ),
      },
      {
        name: "slide #38",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide38.PNG" /> ),
      },
      {
        name: "slide #39",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide39.PNG" /> ),
      },
      {
        name: "slide #40",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide40.PNG" /> ),
      },
      {
        name: "slide #41",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide41.PNG" /> ),
      },
      {
        name: "slide #42",
         image: (
          <img  width="75%" height="500vh"
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Slide42.PNG" /> ),
      },
    ];

    return (
      <Carousel  navButtonsAlwaysVisible >
        {items.map((item, i) => (
          <div style={{ textAlign: "center" }}>{item.image}</div>
        ))}
      </Carousel>
    );
  }

  function SelfService()
{
    var items = [
        {
            name: "Data IQ Portal #1",
            description: "Probably the most random thing you have ever seen!",
            image:<img width="75%" height="500vh" src="https://raw.githubusercontent.com/khajamoh/looker-assets/f84fe1dc755ccf7cde61c1206890161e4bf21efb/DQ_Portal_S_4.JPG"/>
        },
        {
            name: "Data IQ Portal #2",
            description: "Probably the most random thing you have ever seen!",
            image:<img  width="75%" height="500vh" src="https://raw.githubusercontent.com/khajamoh/looker-assets/f84fe1dc755ccf7cde61c1206890161e4bf21efb/DQ_Portal_S_5.JPG"/>
        }
    ]

    

    return (
        <Carousel  >
            {
                items.map( (item, i) => <div style={{textAlign: "center"}}>{item.image}</div> )
            }
        </Carousel>
    )
}

function Governance()
{
    var items = [
        {
            name: "Data IQ Portal #1",
            image:<img width="75%" height="500vh" src=""/>
        },
        {
            name: "Data IQ Portal #2",
            image:<img  width="75%" height="500vh" src=""/>
        }
    ]

    

    return (
        <Carousel  >
            {
                items.map( (item, i) => <div style={{textAlign: "center"}}>{item.image}</div> )
            }
        </Carousel>
    )
}

function Health()
{
    var items = [
        {
            name: "Data IQ Portal #1",
            description: "Probably the most random thing you have ever seen!",
            image:<img width="75%" height="500vh" src=""/>
        },
        {
            name: "Data IQ Portal #2",
            description: "Probably the most random thing you have ever seen!",
            image:<img  width="75%" height="500vh" src=""/>
        }
    ]

    

    return (
        <Carousel  >
            {
                items.map( (item, i) => <div style={{textAlign: "center"}}>{item.image}</div> )
            }
        </Carousel>
    )
}




  return (
    <>
    <Tabs2 >
    <Tab2 id={"1"} label={"Home"} >
    <DataIQ />
    </Tab2>
    <Tab2 id={"2"} label={"DataIQ Self-Service"}>
    <SelfService />
    </Tab2>
    <Tab2 id={"23"} label={"Data Governance"}>
    < Governance/>
    </Tab2>
    <Tab2 id={"4"} label={"Health"}>
    < Health/>
    </Tab2>
    
    </Tabs2>
    </>
  );
}
