import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Home";

import { store } from "./store/store";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
 
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
