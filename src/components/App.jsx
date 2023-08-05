import { Routes, Route } from 'react-router-dom';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
//import Main from "./Main/Main"
import Trade from "./Trade/Trade"

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
          <Route path="/" element={<Trade />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
