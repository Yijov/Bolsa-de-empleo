import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, UserProfile } from "./pages";
import { Navigation, PrivateRoute, Footer } from "./components";
import { StateProvider } from "./state/State";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <StateProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
        </Switch>
        <Footer />
      </StateProvider>

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
