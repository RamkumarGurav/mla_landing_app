import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </>;
};

export default App;
