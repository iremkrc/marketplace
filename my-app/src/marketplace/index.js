import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./App";
import configureAxios from "./config/AxiosConfig";

configureAxios();

export default function () {
  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
}