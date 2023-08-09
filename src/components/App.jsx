import { Routes, Route } from 'react-router-dom';
import Main from "./Main/Main"
import Trade from "./Trade/Trade"
import Layout from './Layout/Layout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/trade" element={<Trade />} />
        </Route>
      </Routes>
  );
}

export default App;
