import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css"

const Give = () => {
  
  const handleClick = () => { 
    window.open("https://www.paypal.com/donate/?hosted_button_id=PEFXXU3ZNEQD6")
  }
  
  return (
    <Layout>
      <div className={styles.textCenter}>
        <button onClick={handleClick}>
          Donate Here
        </button>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Give" />;

export default Give;
