import React from "react";
import {
  Button,
  Header,
  Label,
  LabelProps,
  Menu,
  MenuItem,
  Space,
} from "@looker/components";

interface HeaderComponentProps {
  menuList: any;
  changeMenu: any;
  selectedMenu: any;
}

export default function HeaderComponent(
  props: HeaderComponentProps & LabelProps
) {
  const { menuList, ...restProps } = props;
  const menuStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.05rem",
    backgroundColor: "#1a73e8",
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
    fontSize: "1.05rem",
    backgroundColor: "rgb(3 55 123)",
    border: "hidden",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };
  const iconStyles = {
    color: "#1a73e8",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  };
  const menuItems = menuList.map((value: any, index: any) =>
    value.subMenus.length != 0 && value.subMenus[0].subMenu != "" ? (
      <Menu
        content={value.subMenus.map((subMenuValue: any) =>
          !subMenuValue.newObj ? (
            subMenuValue.items.length != 0 ? (
              <>
                <MenuItem
                  onClick={() => props.changeMenu(subMenuValue.items[0], index)}
                  nestedMenu={
                    subMenuValue.items.length != 0 &&
                    subMenuValue.items[0].item.length != 0
                      ? subMenuValue.items.map((itemValue: any) => (
                          <>
                            <MenuItem
                              onClick={() => props.changeMenu(itemValue, index)}
                            >
                              {itemValue.item}
                            </MenuItem>
                          </>
                        ))
                      : null
                  }
                >
                  {subMenuValue.subMenu}
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() =>
                    props.changeMenu({ tabs: [], item: "item" }, index)
                  }
                >
                  {subMenuValue.subMenu}
                </MenuItem>
              </>
            )
          ) : (
            <>
              <MenuItem
                onClick={() =>
                  props.changeMenu(
                    { tabs: [], newObject: value.subMenus[0], item: "item" },
                    index
                  )
                }
              >
                {subMenuValue.subMenu}
              </MenuItem>
            </>
          )
        )}
      >
        <Label {...restProps}>
          <span style={props.selectedMenu == index ? menuStyles : menuStyles1}>
            {value.menu}
          </span>
        </Label>
      </Menu>
    ) : value.subMenus.length != 0 && value.subMenus[0].subMenu == "" ? (
      <Label
        onClick={() =>
          props.changeMenu(
            { tabs: [], newObject: value.subMenus[0], item: "item" },
            index
          )
        }
        {...restProps}
      >
        <span style={props.selectedMenu == index ? menuStyles1 : menuStyles}>
          {value.menu}
        </span>
      </Label>
    ) : (
      <Label
        onClick={() =>
          props.changeMenu({ tabs: [], object: value, item: "menu" }, index)
        }
        {...restProps}
      >
        <span style={props.selectedMenu == index ? menuStyles1 : menuStyles}>
          {value.menu}
        </span>
      </Label>
    )
  );
  return (
    <Header
      height="4rem"
      px="large"
      style={{ borderBottom: "1px solid #e8e8e8" }}
    >
      <Space justify="start">
        <Label
          {...restProps}
          onClick={() => props.changeMenu({ tabs: [], item: "" })}
        >
          <span style={iconStyles}>Executive Leadership Portal</span>
        </Label>
      </Space>
      <Space justify="end">
        {menuItems}
        <img
          src="https://www.ttec.com/sites/all/themes/main/logos/ttec-logo-40th.png"
          alt="display image"
          height={30}
        />
      </Space>
    </Header>
  );
}
