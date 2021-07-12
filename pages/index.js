import Head from 'next/head'
import Article from '../components/Article';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Favicon from '../components/Favicon'
import client from "../lib/client";
import queries from "../lib/queries"

export default function Home({ info }) {

  const { seo, principal, articulos } = info;
  console.log(info)

  return (
    <>
      <Head>
        <title>{seo[0].nombrePagina}</title>
        <meta name="keywords" content={seo[0].palabrasClave} />
        <meta name="description" content={seo[0].descripcion} />
        <Favicon />
      </Head>
      <div className="text-lg">
        <Header />
        <Article
          title={principal.titulo}
          image={principal.imagen.foto.formats.medium.url}
          keywords={principal.imagen.palabrasClave}
          content={principal.contenido}
          main
        />
        {
          articulos.map((articulo, id) => (
            <Article
              key={id}
              title={articulo.titulo}
              image={articulo.imagen.foto.formats.medium.url}
              keywords={articulo.imagen.palabrasClave}
              content={articulo.contenido}
              last={id === articulos.length - 1}
            />
          ))
        }
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {

  const pageInfo = await client.query({
    query: queries.homePage
  });

  return {
    props: {
      info: pageInfo.data.home
    },
    revalidate: 1
  }
}
