import styled from "styled-components";
import luffy from "./assets/img/luffy.png";
import skyImg from "./assets/img/sky.jpg";
import { quotes } from "./components";

export default function App() {
  return (
    <Content /*className="App"*/>
      <quotes quote={"ok"} speaker={"speaker"} />
      <LuffyImg src={luffy} alt="Luffy with straw hat" />
    </Content>
  );
}

const Content = styled.div`
  height: 90vh;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: url(${skyImg}) no-repeat center center;
`;

/* const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;
`;*/

const LuffyImg = styled.img`
  width: 50%;
  height: auto;
`;
