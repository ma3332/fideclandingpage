import Image from 'next/image'
import styles from '../../../styles/Features.module.scss'

type FeatureProps = {
  title: string
  description: string
  img?: string | any
  alt?: string
  reverse?: boolean
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  img,
  alt,
  reverse,
}) => {
  return (
    <div
      className={`${styles.featureContainer} ${
        reverse ? styles.featureContainerReverse : ''
      }`}
    >
      <div className={styles.featureText}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={`mainButton`}>Learn More</button>
      </div>
      <div className={styles.featureImg}>
        <Image loading="lazy" src={img} alt={'fa'} />
      </div>
    </div>
  )
}

export default Feature