import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import CustomHead from '../../components/CustomHead';
import Article from '../../components/Article';
import Link from 'next/link';
import PostCard from '../../components/PostCard';

export default function Home({ info }) {

  const { blog, posts } = info;
  const { seo, presentacion } = blog;

  return (
    <>
      <CustomHead>
        <title>{seo.nombrePagina}</title>
        <meta name="keywords" content={seo.palabrasClave} />
        <meta name="description" content={seo.descripcion} />
        <Favicon />
      </CustomHead>
      <Header />
      <Article title={presentacion.titulo} content={presentacion.contenido} />
      <section className="grid grid-cols-1 p-2 pb-8 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
        {
          posts.map((post, id) => {
            console.log(post)
            return (
              <Link key={id} href={`/blog/${post.id}`}>
                <a>
                  <PostCard title={post.titulo} content={post.contenido} image={post.imagen?.foto.formats.medium.url} keywords={post.imagen?.palabrasClave} />
                </a>
              </Link>
            )
          })
        }
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const pageInfo = await client.query({
    query: queries.blogPage
  });

  return {
    props: {
      info: pageInfo.data
    },
    revalidate: 1
  }
}
