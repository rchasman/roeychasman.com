import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Welcome</title>
    </Head>

    <Nav />

    <div>
      <div className="tc pt5">
        <h1 className='lh-title f1 mb5'>Roey Chasman</h1>
        <img className='ba pa3 mb4 br5' src='https://avatars.io/twitter/rchasman/large' />
        <p className='f2'>
          CTO, Product Director, Software Architect
        </p>
      </div>
    </div>
  </div>
)

export default Home
