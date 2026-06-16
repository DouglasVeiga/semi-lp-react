import './App.css'
import { useState } from 'react'

function App() {
  const [nome,setNome] = useState("")
  const [assunto,setAssunto] = useState("")
  
  const navTo = (id) => {
    const element = document.getElementById(id)

    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/*************?text=${msg}`)
  }

  return (
    <>
    <nav>
      <span className="navItem" onClick={() => navTo('s1')}>
        <img src="./home.png" alt="Home" />
        <p className="navWords">Home</p>
      </span>
      <span className="navItem" onClick={() => navTo('s3')}>
        <img src="./cards.png" alt="Cards" />
        <p className="navWords">Cards</p>
      </span>
      <span className="navItem" onClick={() => navTo('s4')}>
        <img src="./video.png" alt="Video" />
        <p className="navWords">Video</p>
      </span>
      <span className="navItem" onClick={() => navTo('s5')}>
        <img src="./contato.png" alt="Contato" />
        <p className="navWords">Contato</p>
      </span>
    </nav>
    <main>
      <section id="s1" className="s1">
        <h1>Aulas de Bateria</h1>
        <h2>
          Venha fazer suas aulas!
        </h2>
      </section>
    
     
      <section id="s3" className="s3">
        <div className="card">
          <img src="./batera1.jpg" alt=""/>
          <div className="textCard">
            <h3>BATERA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card">
          <img src="./batera2.jpg" alt=""/>
          <div className="textCard">
            <h3>BATERA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card">
          <img src="./batera3.jpg" alt=""/>
          <div className="textCard">
            <h3>BATERA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        
      </section>

      <section id="s4" className="s4">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/Fjv8gqSKHX8?si=LVVwGEstSM74kYs_"
          title="YouTube video player"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section id="s5" className="s5">
        <div className="formulario">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
          <label htmlFor="assunto">Assunto:</label>
          <textarea id="assunto" placeholder="Insira sua mensagem" value={assunto} onChange={(e) => setAssunto(e.target.value)}></textarea>
          <button onClick={enviar}>ENVIAR</button>
        </div>
      </section>
    </main>
    <footer>
        <a href="https://facebook.com" target="_blank">
            <img width="40px" src="./facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank">
            <img width="40px" src="./instagram.png" alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank">
            <img width="40px" src="./linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://github.com" target="_blank">
            <img width="40px" src="./github.png" alt="Github" />
        </a>
    </footer>

    </>
  )
}

export default App
