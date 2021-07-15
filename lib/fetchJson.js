export default async function fetchJson(...args) {
  try {
    const response = await fetch(...args);
    const result = await response.json()
    return result
  } catch (err) {
    return ({ error: true, message: "There was an error at fetch JSON: " + err.message })
  }
}