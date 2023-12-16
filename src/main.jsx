import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "@coreui/coreui/dist/css/coreui.min.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CounterPartyInformation } from "./pages/CounterPartyInformation";
import { Login } from "./pages/Login";
import { TestingPage } from "./pages/Test/TestingPage";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<CounterPartyInformation />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestingPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
