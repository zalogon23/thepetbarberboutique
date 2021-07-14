import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import CustomHead from '../../components/CustomHead';
import Article from '../../components/Article';
import Share from '../../components/Share';

export default function Home({ info }) {

  const { id, titulo, contenido } = info;
  const imagen = info?.imagen;
  const blogsURL = "https://the-pet-barber-boutique.herokuapp.com/blog/";

  return (
    <>
      <CustomHead>
        <title>{`The Pet Barber Shop | ${titulo}`}</title>
        <meta name="keywords" content={titulo} />
        <meta name="description" content={contenido.slice(0, 40)} />
        <Favicon />
      </CustomHead>
      <Header />
      <Article title={titulo} content={contenido} image={imagen?.foto.formats.medium.url} keywords={imagen.palabrasClave} />
      <Share url={`${blogsURL}/${id}`} />
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {

  const { id } = params

  const pages = await client.query({
    query: queries.postsPage
  });

  const pageInfo = pages.data.posts.find(post => post.id == id);

  return {
    props: {
      info: pageInfo
    },
    revalidate: 1
  }
}


export async function getStaticPaths() {
  const result = await client.query({
    query: queries.postsIDs
  });
  const postsIDs = result.data.posts

  return {
    paths: [
      ...postsIDs.map(res => ({ params: { id: res.id } }))
    ],
    fallback: false
  };
}