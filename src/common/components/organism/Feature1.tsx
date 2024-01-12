import Image from 'next/image'
import styles from '../../../styles/Features.module.scss'
import Link from 'next/link';
import { Url } from "next/dist/shared/lib/router/router"

type FeatureProps = {
  title: string
  description: string
  img?: string | any
  alt?: string
  reverse?: boolean
  link: Url
}

export default function Feature(props:FeatureProps) { const {
  title,
  description,
  img,
  alt,
  reverse,
  link
} = props
  return (
    <div
      className={`${styles.featureContainer} ${
        reverse ? styles.featureContainerReverse : ''
      }`}
    >
      <div className={styles.featureText}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link}>
            Learn More
        </Link>
        {/* <button className={`mainButton`}>Learn More</button> */}
      </div>
      <div className={styles.featureImg}>
        <Image loading="lazy" src={img} alt={'fa'} />
      </div>
    </div>
  )
}
