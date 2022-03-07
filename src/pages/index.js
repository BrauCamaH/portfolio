import * as React from "react";
import Layout from "../components/layout";
import Skills from "../components/skills";
import Profile from "../components/profile";

export default function App() {
  return (
    <Layout>
      <Profile />
      <Skills />
    </Layout>
  );
}
