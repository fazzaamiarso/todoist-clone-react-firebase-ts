import { ChakraProvider, Heading, theme } from "@chakra-ui/react";
import AuthPage from "./pages/auth/AuthPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthPage />
    </ChakraProvider>
  );
}

export default App;
