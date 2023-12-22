// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

// UI
import { Login } from "./pages/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Bootstraps and css
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ContractAddPages } from "./pages/ContractAddPages";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route
            path="/forgot-password"
            element={
              <div className="container text-primary fs-2 text-lg-center mt-5">
                Forgot Password Page
              </div>
            }
          />
        </Route>

        <Route path="/add-contract" 
          element={<DefaultLayout />}>
          <Route index element={<ContractAddPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
