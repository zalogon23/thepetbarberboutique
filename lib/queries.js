import { gql } from "@apollo/client"

const seo = `seo{
  nombrePagina,
  palabrasClave,
  descripcion
}`

const queries = {
  homePage: gql`
  query{
    home{
      ${seo}
      principal{
        titulo,
        imagen{
          palabrasClave,
          foto{
            formats
          }
        },
        contenido,
        alternativo
      },
      articulos{
        titulo,
        imagen{
          palabrasClave,
          foto{
            formats
          }
        },
        contenido,
        alternativo
      }
    }
   }
  `,
  serviciosPage: gql`
  query{
    servicio{
      ${seo},
      principal{
        titulo,
        contenido,
        alternativo
      },
      servicios{
        titulo,
        descripcion,
        modelo,
        tipo
      }
    }
  }
  `,
  contactoPage: gql`
  query{
    contacto{
      ${seo},
      card{
        titulo,
        socialMedia,
        descripcion,
        color
      }
    }
  }
  `,
  nosotrosPage: gql`
  query{
    nosotro{
      ${seo},
      presentacion{
        titulo,
        imagen{
          foto{
            formats
          },
          palabrasClave
        },
        contenido,
        alternativo
      },
      logros{
        titulo,
        imagen{
          foto{
            formats
          },
          palabrasClave
        },
        contenido,
        alternativo
      }
    }
  }
  `
}

export default queries