import { Users } from "../../../lib/database"

export default async function (req, res) {
  try {
    if (req.method === "POST") {
      const { email, name } = req.body
      if (!emailValid(email) || !nameValid(name)) {
        res.status(501).json({ error: true, message: "Invalid data" })
        return
      }
      const allMatchingUsers = await Users.findAll({ where: { email }, raw: true });
      if (!!allMatchingUsers.length) {
        res.status(501).json({ error: true, message: "The email is already on DB" })
        return
      }
      //If everything is allright
      const result = (await Users.create({ email, name })).get({ plain: true })
      if (result.email === email && result.name === name) {
        res.status(200).json({ error: false, message: "The email has been registered succesfully" })
        return
      }
      throw new Error("The email/name created on the database doesn't match the ones received (maybe some problem on DB)")
    }
  } catch (err) {
    res.status(501).json({ error: true, message: "The was a general error at the endpoint '/users/suscribe': " + err.message })
    console.log("The was a general error at the endpoint '/users/suscribe': " + err.message)
  }


  function nameValid(name) {
    return !!name.length
  }

  function emailValid(email) {
    const validEmails = ["@gmail.com", "@gmail.com.ar", "@outlook.com", "@outlook.com.ar", "@hotmail.com", "@hotmail.com.ar", "@yahoo.com", "@yahoo.com.ar", "@live.com", "@live.com.ar"];
    const matches = validEmails.find(valid => email.indexOf(valid) !== 0 && email.indexOf(valid) !== -1)
    return !!matches
  }
}