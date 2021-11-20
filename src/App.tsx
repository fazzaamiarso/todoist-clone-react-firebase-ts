import { ChakraProvider, theme } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Content></Content> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login">
              <Content />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
