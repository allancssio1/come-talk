import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat } from "./Pages/Chat";
import { Login } from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
