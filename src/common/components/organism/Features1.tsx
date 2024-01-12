import { Box } from "@mui/material";
import featuresChart1 from "../../../../public/assets/featuresChart1.png";
import featuresChart2 from "../../../../public/assets/featuresChart2.jpg";
import featuresTable from "../../../../public/assets/featuresTable.png";
import Feature from "./Feature1";
import styles from "../../../styles/Features.module.scss";

const Features1 = () => {
  return (
    <Box component="section">
      <Box
        component="a"
        id="features"
        className="relative xs:-top-[190px] lg:-top-[350px]"
      ></Box>
      <section className={`${styles.featuresContainer} sectionContainer`}>
        <h2 className={styles.featuresSectionTitle}>
          Smart Card Wallet Features
        </h2>

        <Feature
          title="Cold Wallet"
          description="Hardware Wallet that store your private key in a hardware device that is separated from the internet environment. Furthermore, with EAL 6+ certificate, no one even you can get the value of private key from the wallet. You can only restore your wallet by mnemonic phrase that shown to you one time only when you activate the wallet"
          img={featuresChart1}
          alt="features Chart"
          link="https://www.investopedia.com/terms/c/cold-storage.asp"
        />

        <Feature
          title="Security Assurance"
          description="All data transferred between Smart Card and apps will be encrypted according to Global Platform SCP03 Standard. Private Keys are stored in your smart card which follow EAL 6+ standard. Only your public keys are exposed to the Internet for digital signature verification"
          img={featuresChart2}
          alt="features Chart"
          reverse={true}
          link="https://globalplatform.org/wp-content/uploads/2014/07/GPC_2.3_D_SCP03_v1.1.2_PublicRelease.pdf"
        />

        <Feature
          title="Payment gateway on Decentrialized Financial System"
          description="Fidec is not only a cold wallet, Fidec is a secured and user-friendly payment gateway for ones would like to participate in a decentrialized financial ecosystem based on blockchain technology"
          img={featuresTable}
          alt="features Table"
          link="/#"
        />
      </section>
    </Box>
  );
};

export default Features1;
