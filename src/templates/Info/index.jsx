import './index.css';
import React from 'react';

function Home() {

  return (
    <section className='container'>
        <h1 className='title'>Seja bem vindo ao meu projeto!!!</h1>

        <div className='text-container'>
            <p>Esse projeto foi desenvolvido por Matheus Alves, com o objetivo de participar de um projeto seletivo da empresa que está avaliando minhas capacidades como Dev Front-End</p> <br />
            <p>O objetivo do teste é testar minhas capacidades fazendo um projeto em React que pegue dados de uma API e que consiga listar e pesquisar dos resultados que são buscados pela API escolhida</p> <br />
            <p>A API que escolhi foi a <a href="https://api.publicapis.org">https://api.publicapis.org</a></p>
        </div>
    </section>
  );
}

export default Home;
