import './App.css'; //importando o css do estilo
import ConteudoLateral from './componentes/conteudoLateral';

export default function App() {
  // a funçao está retornando o JSX para ser mostrado na tela
  // a funçao é obrigatoria ter um RETURN

  // JSX (HTML do javascript)
  return (
    <div className="App">
      
      <ConteudoLateral />

      <div className='conteudoPrincipal'>
        Conteúdo Principal
      </div>

    </div>
  );
}


