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
        alternativo,
        links{
          text,
          url
        }
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
        alternativo,
        links{
          text,
          url
        }
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
  `,
  blogPage: gql`
  query{
    blog{
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
        alternativo,
        links{
          url
        }
      }
    },
    posts{
      id,
      titulo,
      contenido,
      imagen{
        foto{
          formats
        },
        palabrasClave
      }
    }
  }`,
  postsPage: gql`
  query{
    posts{
      id,
      titulo,
      contenido,
      imagen{
        foto{
          formats
        },
        palabrasClave
      }
    }
  }`,
  postsIDs: gql`
  query{
    posts{
      id
    }
  }`,
  addEmail: gql`
  mutation Add($nombre: String!, $email: String!){
    createClient(input: {
      data: {
        nombre: $nombre,
        email: $email
      }}){
      client{
        email,
        nombre
      }
    }
  }
  `,
  getEmails: gql`
    query{
      clients{
        nombre, email
      }
    }
  `
}

export default queries