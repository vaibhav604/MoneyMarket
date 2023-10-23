import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Header from "../src/components/Header/Header";

const App = () => {
  return (
    <Layout>
      <Header />
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
