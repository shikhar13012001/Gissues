import { motion } from 'framer-motion'
import React from 'react'
import { NextSeo } from 'next-seo'
const Layout = ({ children, title, description }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
  }
  return (
    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'linear' }}
      className='layout'
    >
      <NextSeo
        title={title || 'Gissues'}
        titleTemplate={title || 'Gissues'}
        defaultTitle='Gissues'
        description={
          description ||
          'Gissues helps new and existing developers to find and resolve issues in the GitHub Open sourced repos'
        }
        canonical='gissues.vercel.app'
        openGraph={{
          url: 'gissues.vercel.app',
          title: 'Shikhar Gupta',
          description:
            description ||
            'A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now.',
          images: [
            {
              url: 'https://i.ibb.co/FYzMwM0/Screenshot-103.png',
              width: 800,
              height: 420,
              alt: 'Gissues'
            }
          ]
        }}
        twitter={{
          handle: '@Nodlehs73',
          site: '@Nodlehs73',
          cardType: 'summary_large_image'
        }}
      />
      {children}
    </motion.div>
  )
}

export default Layout
