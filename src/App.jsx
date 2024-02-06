import Container from "./components/Container";
import Header from "./components/Header";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <h2
          style={{
            margin: "20px 0px",
            fontSize: "20px",
            fontWeight: "800",
            paddingInline: "10px",
          }}
        >
          All Products:{" "}
        </h2>
        <Products />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
