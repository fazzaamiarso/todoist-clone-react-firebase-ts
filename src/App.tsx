import { ChakraProvider, Spinner, theme } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import PrivateRoute from "./pages/auth/PrivateRoute";

const Login = lazy(() => import("./pages/auth/LoginFormik"));
const Signup = lazy(() => import("./pages/auth/SignupFormik"));
const Inbox = lazy(() => import("./pages/Inbox"));
const Project = lazy(() => import("./pages/Project"));
const Today = lazy(() => import("./pages/Today"));
const Upcoming = lazy(() => import("./pages/Upcoming"));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Spinner position="fixed" top="50%" left="50%" />}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
