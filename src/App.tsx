// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth.jsx";
import { lazy, useState } from "react";
const Page = lazy(() => import("./Page.tsx"));
const Page2 = lazy(() => import("./Page2.tsx"));
const Page3 = lazy(() => import("./Page3.tsx"));
const Page4 = lazy(() => import("./Page4.tsx"));
const Login = lazy(() => import("./auth/login/SignIn.jsx"));

import useCookies from "./hooks/useCookies";
function App() {
  const { cookieValue, setCookie } = useCookies("filename");
  const handleFileName = (value: string) => {
    setFilename(value);
    setCookie(value);
  };

  const [filename, setFilename] = useState(cookieValue); // State for filename input

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
                <Page filename={filename} />
            }
          />
          <Route
            path="sede-lusciano"
            element={
              
                <Page2 filename={filename} />
              
            }
          />
          <Route
            path="3"
            element={
              <RequireAuth>
                <Page3 filename={filename} setFilename={handleFileName} />
              </RequireAuth>
            }
          />
          <Route
            path="admin"
            element={
              <RequireAuth>
                <Page4 filename={filename} setFilename={handleFileName} />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
