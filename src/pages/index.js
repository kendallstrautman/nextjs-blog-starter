import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../data/config.json`)
  return {
    props: {
      title: configData.title,
      description: configData.description,
    },
  }
}
