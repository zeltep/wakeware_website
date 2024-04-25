import { useState } from 'react'
import '../styles/Explorer.css'
import timeAgo from '../utils/timeAgo'

function Explorer() {

    const [typeSelected, setTypeSelected] = useState("News")
    const [sortBy, setSortBy] = useState("latest")

    //TODO: make api call to obtain items

    //Example items (to be obtained from api)
    let items = [
        {
            title: "WakeWare Website officially launched!",
            author: "Jane Doe",
            date: new Date(2019, 11, 23),
            type: "News",
        },
    ]

    items.sort((a, b) => {
      const firstDate = a.date.getTime()
      const secondDate = b.date.getTime()

      switch(sortBy) {
        case "oldest":
          return firstDate - secondDate
        default:
          return secondDate - firstDate
      }
    })

    return (
        <div className="explorer">
            <div className="explorerFilter">
                <span>Filters:</span>
                <select value={typeSelected} onChange={(e) => setTypeSelected(e.target.value)}>
                    <option value={"News"}>News</option>
                    <option value={"Projects"}>Projects</option>
                </select>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value={"latest"}>Latest</option>
                    <option value={"oldest"}>Oldest</option>
                </select>
            </div>
            <ol>
                {items.map(i => {
                    return i.type == typeSelected ? (
                        <li className="explorerItem" key={items.indexOf(i)}>
                            <a href="/news">
                                <span id="explorer-title">{i.title}</span>
                            </a>
                            <div className="metatext">
                                <span>{timeAgo(i.date)}</span>
                                <span>|</span>
                                <span>{i.type}</span>
                                <span>|</span>
                                <span>{i.author}</span>
                            </div>
                        </li>
                    ) : null
                })}
            </ol>
        </div>
    )
}

export default Explorer
