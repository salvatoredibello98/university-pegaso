// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import { lazy, useState } from "react";
const Page = lazy(() => import("./Page.tsx"));
const Page2 = lazy(() => import("./Page2.tsx"));
const Page3 = lazy(() => import("./Page3.tsx"));
const Page4 = lazy(() => import("./Page4.tsx"));

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
