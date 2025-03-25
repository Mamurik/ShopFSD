import { createRoot } from "react-dom/client";
import App from "./root/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import "../assets/styles/App.css";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
