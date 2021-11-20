import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Signup from "./pages/auth/Signup";
import Project from "./pages/Project";

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
          <Route path="app/inbox" element={<></>} />
          <Route path="app/today" element={<></>} />
          <Route path="app/upcoming" element={<></>} />
          <Route path="projects/:projectId" element={<Project />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
