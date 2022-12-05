import type { NextPage } from 'next'
import Header from './components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Section1 from './components/Section1'
import ProductCategories from './components/ProductCategories'
import Tenders from './components/Tenders'
import Products from './components/Products'
import About from './components/About'
import Services from './components/Services'
import NgCompanies from './components/NgCompanies'
import Marketing from './components/Marketing'
import GetQuote from './components/GetQuote'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section1 />
      <ProductCategories />
      <Tenders />
      <Products />
      <About />
      <Services />
      <NgCompanies />
      <Marketing />
      <GetQuote />
    </>
  )
}

export default Home
