import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

export default function App() {

    const cards= data.map(item =>{
        return(
                <Card
                    key={item.title}
                    item={item}
                />
            )
        
    })
    return(
        <div>
            <Header/>
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}