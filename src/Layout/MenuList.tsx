export const menuList = [
  {
    menu: "Finance",
    subMenus: [
      {
        subMenu: "Summary P&L",
        id: 1700,
        env: "cbidev",
        newObj:true,
        items: [
          {
            item: "Engage Financial Performance",
            tabs: [
              {
                id: 562,
                env: "cbi",
                tab: "Engage Financial Performance",
              },
              {
                id: 565,
                env: "cbi",
                tab: "Client Revenue ERGM GM",
              },
              {
                id: 566,
                env: "cbi",
                tab: "Client Revenue and Margin Trend",
              },
              {
                id: 564,
                env: "cbi",
                tab: "Engage Financial Performance YTD",
              },
              {
                id: 563,
                env: "cbi",
                tab: "Engage Financial Performance QTD",
              },
            ],
          },
          {
            item: "Digital Financial Performance",
            tabs: [
              {
                id: 1605,
                env: "cbidev",
                tab: "Digital Financial Performance",
              },
              {
                id: 1607,
                env: "cbidev",
                tab: "Digital Financial Performance - Practices",
              },
              {
                id: 1656,
                env: "cbidev",
                tab: "Practice Financials",
              },
            ],
          },
          {
            item: "Portfolio Scorecard",
            id: 1711,
            env: "cbidev",
            tabs: [],
          },
          {
            item: "P&L Detail",
            id: 1710,
            env: "cbidev",
            tabs: [],
          },
        ],
      },
    ],
  },

  {
    menu: "Human Capital",
    id: 637,
    env: "cbi",
    subMenus: [],
  },
  {
    menu: "Open Requisitions",
    id: 1671,
    env: "cbidev",
    subMenus: [],
  },
];
