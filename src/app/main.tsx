import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./root/App.tsx";
import "../assets/styles/App.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
