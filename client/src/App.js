import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  // the second parameter [] makes sure this runs only once. Otherwise useEffect will make it run indefinitely
  // so it works like componentDidMount()
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Fragment>
          <Routes suppressNoMatchWarning={true}>
            <Route path="/" element={<Landing />} />
          </Routes>
          <section className="container">
            <Alert />
            <Routes suppressNoMatchWarning={true}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profile/:id" element={<Profile />} />
              {/* PrivateRoute forces to log in in order to see this page */}
              {/* Inside this Route Component, we have an element which has PrivateRoute as a Component
              the PrivateRoute component takes a parameter called component,
              which references the Dashboard Component */}
              <Route
                path="/dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="/create-profile"
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path="/edit-profile"
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                path="/add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="/add-education"
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path="/posts"
                element={<PrivateRoute component={Posts} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
