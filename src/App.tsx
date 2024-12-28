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
          <span className="timestamp">
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
            <div>
              <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chatIcon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                <path d="M12 2v2" />
                <path d="M9 12v9" />
                <path d="M15 12v9" />
                <path d="M5 16l4 -2" />
                <path d="M15 14l4 2" />
                <path d="M9 18h6" />
                <path d="M10 8v.01" />
                <path d="M14 8v.01" />
              </svg>
            </div>
            <h1>
              Chat with me!
            </h1>
          </header>
          <div className="chatMain">
            {
            loading ?
            <h2 className="placeholderLoad">
              Loading...
            </h2>
            :
            messages.map((value, index) => {
              return (
                <div key={index}>
                  {messageComponent(value)}
                </div>
              )
            })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
