// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Page from "./Page";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { useState } from "react";
import useCookies from "./hooks/useCookies";
function App() {
  const { cookieValue, setCookie } = useCookies("filename");
  const handleFileName = (value: string) => {
    setFilename(value)
    setCookie(value)
  }

  const [filename, setFilename] = useState(cookieValue); // State for filename input

  return (
    <>
      <Routes>
        <Route index element={<Page filename={filename}  />} />
        <Route path="2" element={<Page2 filename={filename} />} />
        <Route path="3" element={<Page3 filename={filename} setFilename={handleFileName}/>} />
        <Route path="4" element={<Page4 filename={filename} setFilename={handleFileName}/>} />
      </Routes>
    </>
  );
}

export default App;
