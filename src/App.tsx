import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Signup from "./pages/auth/Signup";
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
          <Route path="app/inbox" element={<Inbox></Inbox>} />
          <Route path="app/today" element={<Today></Today>} />
          <Route path="app/upcoming" element={<Upcoming></Upcoming>} />
          <Route path="projects/:projectId" element={<Project />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
