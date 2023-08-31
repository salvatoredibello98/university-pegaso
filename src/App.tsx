// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Page />} />
        <Route path="2" element={<Page />} />
        <Route path="3" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
