import React, { ReactNode } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from './header'
import { Footer } from './footer'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const router = useRouter()
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  Router.events.on('routeChangeComplete', (url) => {
    setShow(false)
  })

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header show={show} handleToggle={handleToggle} router={router} />
      <Box position='relative' minHeight='100vh'>
        <Box display={{base: 'block', md: 'none'}} height='4rem'/>
        {children}
      </Box>
      <Footer />
    </div>
  )
}

export default Layout
