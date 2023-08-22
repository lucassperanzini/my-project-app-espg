import React from "react"
import Cabecalho from "./assets/component/Cabecalho"

export default function App() {
  return (
    <>
      <div className="name">

      <Cabecalho/>

        <section>

          <p><a href="/"> Home Page </a></p>
          <button onClick={()=> alert('Hello world!')}

            >Click ME!!
          </button>
        </section>



      </div>
      
    </>
  )
}
