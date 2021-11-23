import { Box, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import PopoverTask from "../Shared/Popover/PopoverTask";
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

  const deleteTaskHandler = async () => {
    await deleteDoc(doc(firestore, "tasks", `${id}`));
  };

  return (
    <HStack as="li" w="full">
      <TaskCheckbox
        isCompleted={completed}
        onToggleCompleted={toggleCompletedHandler}
      />
      <Text
        textDecor={completed ? "line-through" : "none"}
        color={completed ? "gray.400" : "black"}
      >
        {taskName}
      </Text>
      <Spacer />
      {!completed && <PopoverTask onDeleteTask={deleteTaskHandler} />}
    </HStack>
  );
};

export default TaskItem;
