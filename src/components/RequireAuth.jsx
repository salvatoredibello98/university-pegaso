import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  const handleLogout = () => {
    auth.logout();
  }

  if (!auth.currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      {children}
    </>
  );
}

export default RequireAuth;
