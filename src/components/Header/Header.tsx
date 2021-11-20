import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { Flex, Spacer } from "@chakra-ui/layout";
import { HStack, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { FaHome, FaBars, FaPlus } from "react-icons/fa";
import { AuthContext } from "../../store/AuthProvider";
import { handleSignOut } from "../../utils/firebaseAuth";
import TaskModal from "../Task/TaskModal";

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);
  const signOutHandler = () => {
    handleSignOut();
  };

  return (
    <>
      <TaskModal isOpen={isOpen} onClose={onClose} />
      <Flex
        as="header"
        alignItems="center"
        bg="red.400"
        py={2}
        px={10}
        position="absolute"
        zIndex="100"
        width="100%"
      >
        <HStack>
          <IconButton
            aria-label="menu"
            icon={<FaBars />}
            variant="ghost"
            color="white"
          />
          <IconButton
            aria-label="home"
            icon={<FaHome />}
            variant="ghost"
            color="white"
          />
        </HStack>
        <Spacer />
        <HStack>
          <IconButton
            aria-label="plus"
            icon={<FaPlus />}
            variant="ghost"
            color="white"
            onClick={onOpen}
          />
          <Button onClick={signOutHandler}>Logout</Button>
          <Avatar
            name={(user && user.email) ?? ""}
            src="no-link"
            _hover={{ cursor: "pointer" }}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
