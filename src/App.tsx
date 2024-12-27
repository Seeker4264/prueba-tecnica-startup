import { useEffect, useState } from "react"
import { dataFetch } from "./lib/fetching"

import { Message } from "./types/types"

function App() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    dataFetch()
    .then((data) => {
      setMessages(data)
      setLoading(false)
    })
  }, [])

  const messageComponent = (message: Message) => {
    const dateHour = message.message_date.split("T")[1].slice(0, 5)
    const dateDay = message.message_date.split("T")[0]

    return (
      <>
        <article className={`messageBubble ${message.bot_sender === 1 ? "bot" : "user"}`}>
          <h3>
            {message.sender_name.toUpperCase()}
          </h3>
          <p>
            {message.message_text}
          </p>
          <span>
            <p>
              {dateDay} &nbsp;
            </p>
            <p>
              &nbsp; {dateHour}
            </p>
          </span>
        </article>
      </>
    )
  }

  return (
    <>
      <main className="mainContainer">
        <div className="chatFrame">
          <header className="chatHeader">
            <h1>Chat with me!</h1>
          </header>
          <div className="chatMain">
            {
            loading ?
            <h2 className="placeholderLoad">
              Loading...
            </h2>
            :
            messages.map((value) => messageComponent(value))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
