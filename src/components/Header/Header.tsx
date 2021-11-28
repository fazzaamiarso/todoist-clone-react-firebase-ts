import { Avatar } from "@chakra-ui/avatar";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Flex, Spacer } from "@chakra-ui/layout";
import { HStack, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { FaHome, FaBars, FaPlus } from "react-icons/fa";
import { Link as BaseLink } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";
import { handleSignOut } from "../../utils/firebaseAuth";
import Tooltip from "../Shared/Tooltip";
import TaskModal from "../Task/TaskModal";

interface Props {
  onToggle: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<Props> = ({
  onToggle: onToggleSidebar,
  isSidebarOpen,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(TodoContext);
  const signOutHandler = async () => {
    await handleSignOut();
  };

  return (
    <>
      {isOpen && <TaskModal isOpen={isOpen} onClose={onClose} />}
      <Flex
        as="header"
        alignItems="center"
        bg="red.400"
        py={2}
        px={"2%"}
        position="absolute"
        zIndex="100"
        width="100%"
      >
        <ButtonGroup variant="ghost">
          <Tooltip tooltipLabel={isSidebarOpen ? "Close menu" : "Open menu"}>
            <IconButton
              aria-label="menu"
              icon={<FaBars />}
              color="white"
              onClick={onToggleSidebar}
            />
          </Tooltip>
          <Tooltip tooltipLabel="Go to home">
            <IconButton
              aria-label="home"
              icon={<FaHome />}
              color="white"
              to="/app/inbox"
              as={BaseLink}
            />
          </Tooltip>
        </ButtonGroup>
        <Spacer />
        <HStack spacing="4">
          <Tooltip tooltipLabel="Quick Add">
            <IconButton
              aria-label="plus"
              icon={<FaPlus />}
              variant="ghost"
              color="white"
              onClick={onOpen}
            />
          </Tooltip>
          <Button onClick={signOutHandler} size="sm">
            Logout
          </Button>
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
