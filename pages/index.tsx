import type { NextPage } from 'next'
import Header from './components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from './components/Section1'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section1 />
    </>
  )
}

export default Home
