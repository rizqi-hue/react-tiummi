import { Layout, LayoutProps } from "react-admin";
import AppBar from "./AppBar";
import Menu from "./Menu";

export default (props: LayoutProps) => {
  return (
    <div>
      <Layout {...props} appBar={AppBar} menu={Menu} />
    </div>
  );
};
