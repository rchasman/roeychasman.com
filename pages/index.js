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

    <div className='w100'>
      <div className="tc">
        <h1 className='ma0 w100 pt5 lh-title f2'>Roey Chasman</h1>
        <img className='ba pa3 ma3 br5' src='https://avatars.io/twitter/rchasman/large' />
        <p className='tc mb4 f2'>
          CTO, Product Director, Software Architect
        </p>
        </div>
      </div>
  </div>
)

export default Home
