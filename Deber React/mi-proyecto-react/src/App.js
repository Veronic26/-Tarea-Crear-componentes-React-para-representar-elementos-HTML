import React, { useState } from "react";
import Imagen from "./components/Imagen";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";
import Lista from "./components/Lista";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Boton from "./components/Boton";
import InputText from "./components/InputText";
import InputEmail from "./components/InputEmail";
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}\nEmail: ${email}`);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <Titulo texto="Mi Aplicación de React App" nivel={1} />
      </div>

      <section className="mt-4">
        <Parrafo texto="La aplicación REACT ha sido desarrollada con el objetivo de ofrecer una solución tecnológica eficiente y accesible para mejorar la gestión y el acceso a la información. A través de una interfaz intuitiva, REACT permite a los usuarios interactuar con diversas funcionalidades que facilitan la organización, consulta y análisis de datos clave, adaptándose a las necesidades específicas del entorno donde se implemente. Esta herramienta no solo optimiza procesos, sino que también contribuye a una toma de decisiones más informada, segura y ágil." />
      </section>

      <section className="text-center">
        <Imagen
          src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
          alt="Imagen de ejemplo"
          width="500"
          height="300"
        />
      </section>

      <section className="mt-4">
        <center><h2> Enlace útil</h2></center>
        <Parrafo texto="Este es el ejemplo del enlace" />
        <Enlace href="https://reactjs.org" texto="Visita React" />
      </section>

      <section className="mt-4">
        <center><h2> Listas de ejemplo</h2></center>
        <h5>Útiles escolares</h5>
        <Lista elementos={["Cuadernos", "Borrador", "Lápiz"]} />

        <h5>Frutas</h5>
        <Lista elementos={["Manzana", "Uvas", "Sandía"]} />

        <h5>Tablas de multiplicar</h5>
        <Lista elementos={["1x1=1", "1x2=2", "1x3=3", "1x4=4", "1x5=5"]} />
      </section>

      <section className="mt-4">
        <center><h2>Tabla de canciones</h2></center>
        <Tabla
          cabecera={["Canción", "Cantante"]}
          datos={[
            ["Glimpse of us", "Joji"],
            ["Beso", "Josean Log"],
            ["Wildflower", "Billie Eilish"],
            ["The Abyss", "The Weeknd"],
          ]}
        />
      </section>

      <section className="mt-4">
        <center><h2> Formulario de contacto</h2></center>
        <Formulario onSubmit={manejarEnvio}>
          <InputText
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <InputEmail
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Boton texto="Enviar" />
        </Formulario>
      </section>
    </div>
  );
}

export default App;
