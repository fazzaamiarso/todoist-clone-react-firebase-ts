import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import LoginFormik from "./pages/auth/LoginFormik";
import PrivateRoute from "./pages/auth/PrivateRoute";
import SignupFormik from "./pages/auth/SignupFormik";
import Inbox from "./pages/Inbox";
import Project from "./pages/Project";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login">
              <Content />
            </PrivateRoute>
          }
        >
          <Route path="app/inbox" element={<Inbox />} />
          <Route path="app/today" element={<Today />} />
          <Route path="app/upcoming" element={<Upcoming />} />
          <Route path="projects/:projectId" element={<Project />} />
        </Route>
        <Route path="/login" element={<LoginFormik />} />
        <Route path="/signup" element={<SignupFormik />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
