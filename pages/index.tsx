import type { NextPage } from 'next'
import Header from './components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default Home
