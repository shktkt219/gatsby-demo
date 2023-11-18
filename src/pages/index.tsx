import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";
import { fontSlab, fontNoto } from '../styles/fonts.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h2 className={fontSlab}>Design</h2>
        <h3>Develop & Deploy</h3>
        <p className={fontNoto}>UX Designer & web developer based in Manchester.</p>
      </div>
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
