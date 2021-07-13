import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import Card from '../../components/Card';
import CustomHead from '../../components/CustomHead';
import Article from '../../components/Article';

export default function Home({ info }) {

  const { seo, card: cards } = info;

  return (
    <>
      <CustomHead>
        <title>{seo.nombrePagina}</title>
        <meta name="keywords" content={seo.palabrasClave} />
        <meta name="description" content={seo.descripcion} />
        <Favicon />
      </CustomHead>
      <Header />
      <Article title="Contactanos" content="Podes comunicarte con nosotros por los siguientes medios:" />
      {
        cards.map((card, id) => <Card
          key={id}
          title={card.titulo}
          color={card.color}
          description={card.descripcion}
          socialMedia={card.socialMedia} />)
      }
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const pageInfo = await client.query({
    query: queries.contactoPage
  });

  return {
    props: {
      info: pageInfo.data.contacto
    },
    revalidate: 1
  }
}
