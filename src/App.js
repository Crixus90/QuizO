import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import routes from "./config/routes";
import { useUser } from "./Context/UserContext";
import "./App.css";

export default function App() {
  const { isLoading, user, authenticate, handleLogout } = useUser();
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="app">
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
