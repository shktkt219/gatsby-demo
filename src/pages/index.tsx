import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX Designer & web developer based in Manchester.</p>
      </div>
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
