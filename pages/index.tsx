import Layout from '../components/Layout'
import { Features } from '../components/features'
import { Hero } from '../components/hero'
import {Stats} from '../components/stats'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero />
    <Features />
    <Stats />
  </Layout>
)

export default IndexPage
