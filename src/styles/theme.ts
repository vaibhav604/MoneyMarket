import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#006357",
    colorPrimaryHover: "#109888",
    colorText: "#323837",
    colorSplit: "#e8efef",
    borderRadius: 5,
    borderRadiusLG: 10,
    colorLinkHover: "#13b2a0",
    colorLink: "#006357",
    colorLinkActive: "#13b2a0",
    colorTextSecondary: "#162325",
    fontFamily: "sans-serif",
    controlItemBgHover: "#f2f8f7",
    controlItemBgActive: "inherit",
    colorBorder: "#d9d9d9",
    colorBorderSecondary: "#f1f1f1",
    fontWeightStrong: 500,
  },
  components: {
    Layout: {
      colorBgHeader: "#F7FAFC",
      colorBgBody: "#fff",
    },
    Radio: {
      colorPrimary: "#109888",
    },
    Modal: {
      borderRadius: 10,
      colorTextHeading: "#323837",
      titleFontSize: 16,
    },
    Table: {
      paddingContentVertical: 8,
      paddingContentHorizontal: 16,
      controlItemBgActive: "#f2f8f7",
      controlItemBgActiveHover: "#f2f8f7",
    },
    Select: {
      colorBgContainer: "#f9fbfc",
    },
    Input: {
      colorBgContainer: "#f9fbfc",
      colorBorder: "#d5dae1",
    },
    InputNumber: {
      colorBgContainer: "#f9fbfc",
    },
    Button: {
      colorText: "#006357",
    },
    Card: {
      borderRadius: 10,
      boxShadowTertiary: "none",
    },
    Checkbox: {
      colorPrimary: "#109888",
    },
    Switch: {
      colorPrimary: "#109888",
    },
    Mentions: {
      colorBgContainer: "#f9fbfc",
    },
    Form: {
      colorTextLabel: "#595959",
    },
    Breadcrumb: {
      fontSize: 16,
    },
    Divider: {
      colorSplit: "#d9d9d9",
    },
    DatePicker: {
      colorBgContainer: "#f9fbfc",
    },
    Result: {
      colorInfo: "#006357",
    },
    Typography: {
      colorLinkHover: "#13b2a0",
      colorLink: "#006357",
      colorLinkActive: "#13b2a0",
      colorInfo: "#006357",
      colorPrimary: "#006357",
    },
  },
};

export default theme;
