import { gql } from "@apollo/client"

const queries = {
  homePage: gql`
  query{
    home{
      seo{
        nombrePagina,
        palabrasClave,
        descripcion
      },
      principal{
        titulo,
        imagen{
          palabrasClave,
          foto{
            formats
          }
        },
        contenido
      },
      articulos{
        titulo,
        imagen{
          palabrasClave,
          foto{
            formats
          }
        },
        contenido
      }
    }
   }
  `
}

export default queries