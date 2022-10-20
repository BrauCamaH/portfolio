import * as React from "react";
import Layout from "../components/layout";
import Skills from "../components/skills";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Education from "../components/education";

export default function App() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Projects />
      <Education />
    </Layout>
  );
}
