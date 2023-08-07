import React from "react"
import Navbar from "./components/Nav"
import Main from "./components/Main"
import data from "./data.js"

export default function App(){
    const details = data.map(function(item){
        return (
            <Main 
            key={item.id}
            {...item}
            />
        )
    })
    
    
   return(
       <div>
       <Navbar />
    <section className="container">
       {details}
    </section>
    </div>
   ) 
}