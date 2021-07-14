const developerNumber = "5491135775481";
const ownerNumber = "5491135775481";

const messages = {
  askForPage: "Me%20gustaria%20consultar%20el%20precio%20de%20una%20pagina%20sobre...%20(describir)",
  askForService: "Me%20gustaria%20consultar%20el%20precio%20del%20servicio:%20",
}

const whatsapp = {
  owner: {
    askForService: service => `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${messages.askForService + service}`
  },
  developer: {
    askForPage: `https://api.whatsapp.com/send?phone=${developerNumber}&text=${messages.askForPage}`
  }
}

const facebook = "https://facebook.com"

const instagram = "https://instagram.com"

export { whatsapp, facebook, instagram }