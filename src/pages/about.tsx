import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from "../components/Layout";

const Aboout: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          dolorum mollitia optio porro? Facilis fugit molestias id cum, iure
          dolor voluptates? Doloribus quidem eum voluptatibus iste, corrupti
          rerum dolorem sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          dolorum mollitia optio porro? Facilis fugit molestias id cum, iure
          dolor voluptates? Doloribus quidem eum voluptatibus iste, corrupti
          rerum dolorem sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          dolorum mollitia optio porro? Facilis fugit molestias id cum, iure
          dolor voluptates? Doloribus quidem eum voluptatibus iste, corrupti
          rerum dolorem sequi!
        </p>
      </div>
    </Layout>
  );
};

export default Aboout;

export const Head: HeadFC = () => <title>About</title>;