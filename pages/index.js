import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import flower from '../public/flower.jpeg'

export default function Home() {
  return (
    <Image
      src={flower}
      alt="example"
    />
  )
}
