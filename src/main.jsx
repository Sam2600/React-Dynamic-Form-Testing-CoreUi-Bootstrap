// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

// UI
import { Login } from "./pages/Login";
import { TestingPage } from "./pages/Test/TestingPage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CounterPartyInformation } from "./pages/CounterPartyInformation";

// Bootstraps and css
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
