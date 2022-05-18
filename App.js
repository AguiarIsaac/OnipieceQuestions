import styled from 'styled-components'
import luffy from './assets/img/luffy.png'
import backgroundImg from './assets/img/sky.jpg'
import './App.css';

function App() {
  return (
    <Content /*className="App"*/>
      <p role="p">Text One Piece</p>
      <button>Quote One Piece</button>
      <img src={luffy} alt="Luffy with straw hat" />
    </Content>
  );
}


const Content =styled.div`
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default App