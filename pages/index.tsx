import type { NextPage } from 'next'
import Header from './components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from './components/Section1'
import ProductCategories from './components/ProductCategories'
import Tenders from './components/Tenders'
import Products from './components/Products'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section1 />
      <ProductCategories />
      <Tenders />
      <Products />
    </>
  )
}

export default Home
