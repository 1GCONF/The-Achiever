import "./style/App.css";
import { Container } from "./components/Container";
import Welcome from "./components/Welcome";
import Focus from "./components/Focus";
import Footer from "./components/Footer"
export default function App() {
  return (
    <Container>
      <Welcome username="Igor"/>
      <Focus/>
      <Footer/>
    </Container>
  );
}
