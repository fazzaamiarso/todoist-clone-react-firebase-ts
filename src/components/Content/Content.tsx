import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

interface Props {
  children?: ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  const { isOpen, onToggle: onToggleBar } = useDisclosure();

  return (
    <>
      <Header onToggle={onToggleBar} />
      <Flex width="100vw" minH="100vh">
        <Sidebar isOpen={isOpen} />
        <Flex alignItems="center" flexDir="column" mx="auto" width="100%">
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
};

export default Content;
