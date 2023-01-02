import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home";
import NewTask from "./components/pages/NewTask";
import Edit from "./components/pages/Edit";
import Pages from "./components/pages/Pages";

function App() {
  return (
    <Router>
      <Container>
        <Content>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/tasks/:page" exact element={<Pages />}/>
            <Route path="/newtask" element={<NewTask />}/>
            <Route path="/edit/:id" element={<Edit />}/>
          </Routes>
          <Footer />
        </Content>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #E4F8FF;
`;

const Content = styled.div`
  width: 400px;
  height: 550px;
  border-radius: 20px;
  box-shadow: 0px 10px 30px -15px #4AC7FC;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default App;
