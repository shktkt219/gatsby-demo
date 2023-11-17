import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from '../components/Navbar';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX Designer & web developer based in Manchester.</p>
      </div>
    </main>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
