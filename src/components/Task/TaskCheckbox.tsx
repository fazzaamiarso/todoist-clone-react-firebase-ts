import Icon from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  isCompleted: boolean;
  onToggleCompleted: () => void;
}

const TaskCheckbox: React.FC<Props> = ({ isCompleted, onToggleCompleted }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="50%"
      w="20px"
      h="20px"
      cursor="pointer"
      onClick={onToggleCompleted}
    >
      {!isCompleted && (
        <Icon
          as={FaCheckCircle}
          w="20px"
          h="20px"
          opacity={0}
          _hover={{ opacity: ".3", transition: "opacity .25s" }}
        />
      )}
      {isCompleted && <Icon as={FaCheckCircle} w="20px" h="20px" />}
    </Box>
  );
};

export default TaskCheckbox;
