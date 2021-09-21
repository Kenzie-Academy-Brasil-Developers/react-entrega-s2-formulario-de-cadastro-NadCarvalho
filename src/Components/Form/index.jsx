import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Nome"></input>
        <input type="text" name="email" placeholder="E-mail"></input>
        <input type="password" name="password" placeholder="Senha"></input>
        <input type="password" name="confirm" placeholder="Confirme a senha"></input>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default Form;