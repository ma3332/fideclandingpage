import featuresChart1 from '../../../../public/assets/featuresChart1.png'
import featuresChart2 from '../../../../public/assets/featuresChart2.png'
import featuresTable from '../../../../public/assets/featuresTable.png'
import Feature from './Feature1'
import styles from '../../../styles/Features.module.scss'

const Features1 = () => {
  return (
    <section className={`${styles.featuresContainer} sectionContainer`}>
      <h2 className={styles.featuresSectionTitle}>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>

      <Feature
        title="Invest Smart"
        description="Get full statistic information about the behaviour of buyers and
        sellers will help you to make the decision."
        img={featuresChart1}
        alt="features Chart"
      />

      <Feature
        title="Detailed Statistics"
        description="View all mining related information in realtime, at any point at any
        location and decide which polls you want to mine in."
        img={featuresChart2}
        alt="features Chart"
        reverse={true}
      />

      <Feature
        title="Grow your profit and track your investments"
        description="Use advanced analytical tools. Clear TradingView charts let you
      track current and historical profit investments."
        img={featuresTable}
        alt="features Table"
      />
    </section>
  )
}

export default Features1
