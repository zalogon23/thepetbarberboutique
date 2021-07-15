import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import CustomHead from '../../components/CustomHead';
import Article from '../../components/Article';

export default function Home({ info }) {

  const { seo, presentacion, logros } = info;

  return (
    <>
      <CustomHead>
        <title>{seo.nombrePagina}</title>
        <meta name="keywords" content={seo.palabrasClave} />
        <meta name="description" content={seo.descripcion} />
        <Favicon />
      </CustomHead>
      <Header />
      <Article
        title={presentacion.titulo}
        formats={presentacion.imagen.foto.formats}
        keywords={presentacion.imagen.palabrasClave}
        content={presentacion.contenido}
        alternative={presentacion.alternativo}
        last
      />
      {
        logros.map((logro, id) => 
        <Article
          key={id}
          title={logro.titulo}
          formats={logro.imagen.foto.formats}
          keywords={logro.imagen.palabrasClave}
          content={logro.contenido}
          last={id === logros.length - 1}
          alternative={logro.alternativo}
        />)
      }
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const pageInfo = await client.query({
    query: queries.nosotrosPage
  });

  return {
    props: {
      info: pageInfo.data.nosotro
    },
    revalidate: 1
  }
}
