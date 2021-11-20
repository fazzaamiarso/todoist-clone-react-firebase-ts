import { Flex } from "@chakra-ui/layout";
import { Children, ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

interface Props {
  children?: ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex width="100vw" minH="100vh">
        <Sidebar />
        <Flex alignItems="center" flexDir="column" mx="auto" width="100%">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default Content;
