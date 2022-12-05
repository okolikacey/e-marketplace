import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'


export default function Wrapper({ children }) {
    return (
        <>
            <Head>
                <title>
                    NOGIC
                </title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}