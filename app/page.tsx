import React from 'react'
import Nav from '@/app/components/Nav'
//import First from '@/app/components/First'
//import Search from '@/app/components/Search'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Head from '@/app/components/Head'
import Blog from '@/app/components/Blog'
import Custom from '@/app/components/Custom'
import Bottom from '@/app/components/Bottom'
import FAQ from '@/app/components/FAQ'
import Mid from '@/app/components/Mid'
import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils'
const page = () => {
  return (
    <div>
     <Nav/>
    <Header/>
    <Mid/>
    <Head/>

    <Blog/>
    <Custom/>
    <Bottom/>
    <FAQ/>
    <Footer/>
    
    </div>
  )
}

export default page
