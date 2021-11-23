import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import TaskCheckbox from "./TaskCheckbox";

interface Props {
  taskName: string;
  completed: boolean;
  id: string;
}

const TaskItem: React.FC<Props> = ({ taskName, completed, id }) => {
  const toggleCompletedHandler = async () => {
    await updateDoc(doc(firestore, "tasks", `${id}`), {
      completed: !completed,
    });
  };

  return (
    <HStack as="li">
      <TaskCheckbox
        isCompleted={completed}
        onToggleCompleted={toggleCompletedHandler}
      />
      <Text textDecor={completed ? "line-through" : "none"}>{taskName}</Text>
    </HStack>
  );
};

export default TaskItem;
