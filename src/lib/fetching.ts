
export const dataFetch = async () => {
  const data = await fetch("https://www.backup-backend.readychatai.com/messages_json")
  return await data.json()
}
