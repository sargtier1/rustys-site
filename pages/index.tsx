import Layout from '../components/Layout'
import { Features } from '../components/features'
import { Hero } from '../components/hero'
import { Spacer } from '@chakra-ui/layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Spacer height='4rem' />
    <Hero />
    <Features />
  </Layout>
)

export default IndexPage
