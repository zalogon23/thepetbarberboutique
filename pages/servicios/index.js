import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import Service from '../../components/Service';
import CustomHead from '../../components/CustomHead';

export default function Home({ info }) {

  const { seo, principal, servicios } = info;

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
        title={principal.titulo}
        image={principal?.imagen?.foto?.formats.medium.url}
        keywords={principal?.imagen?.palabrasClave}
        content={principal.contenido}
        main
        alternative={principal.alternativo}
      />
      <section>
        {
          servicios.map((servicio, id) => (
            <Service
              key={id}
              title={servicio.titulo}
              type={servicio.tipo}
              model={servicio.modelo}
              description={servicio.descripcion}
              last={id === servicios.length - 1}
            />
          ))
        }
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const pageInfo = await client.query({
    query: queries.serviciosPage
  });

  return {
    props: {
      info: pageInfo.data.servicio
    },
    revalidate: 1
  }
}
