import Layout from '../components/Layout'
import { Spacer } from '@chakra-ui/layout'
import { ContactForm } from '../components/contactForm'
import { Stats } from '../components/stats'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Spacer height='4rem'/>
    <Stats />
    <ContactForm />
  </Layout>
)

export default IndexPage
