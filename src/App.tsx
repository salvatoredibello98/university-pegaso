// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import Page2 from "./Page2";
import Page3 from "./Page3";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Page />} />
        <Route path="2" element={<Page2 />} />
        <Route path="3" element={<Page3 />} />
      </Routes>
    </>
  );
}

export default App;
