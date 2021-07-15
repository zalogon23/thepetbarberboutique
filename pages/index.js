import Article from '../components/Article';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Favicon from '../components/Favicon'
import client from "../lib/client";
import queries from "../lib/queries"
import CustomHead from '../components/CustomHead';

export default function Home({ info }) {

  const { seo, principal, articulos } = info;

  return (
    <>
      <CustomHead>
        <title>{seo[0].nombrePagina}</title>
        <meta name="keywords" content={seo[0].palabrasClave} />
        <meta name="description" content={seo[0].descripcion} />
        <Favicon />
      </CustomHead>
      <div className="text-lg">
        <Header />
        <Article
          title={principal.titulo}
          formats={principal.imagen.foto.formats}
          keywords={principal.imagen.palabrasClave}
          content={principal.contenido}
          main
          alternative={principal.alternativo}
        />
        {
          articulos.map((articulo, id) => (
            <Article
              key={id}
              title={articulo.titulo}
              formats={articulo.imagen.foto.formats}
              keywords={articulo.imagen.palabrasClave}
              content={articulo.contenido}
              last={id === articulos.length - 1}
              alternative={articulo.alternativo}
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
