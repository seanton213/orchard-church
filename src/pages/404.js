import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export const Head = () => <Seo title="Not Found" />;

export default NotFoundPage;
