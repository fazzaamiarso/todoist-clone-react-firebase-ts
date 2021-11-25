import {
  Box,
  HStack,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../utils/firebase";
import PopoverTask from "../Shared/Popover/PopoverTask";
import TaskCheckbox from "./TaskCheckbox";
import TaskEdit from "./TaskEdit";

interface Props {
  taskName: string;
  completed: boolean;
  id: string;
  due: string;
}

const TaskItem: React.FC<Props> = ({ taskName, completed, id, due }) => {
  const {
    isOpen: isUpdating,
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
  } = useDisclosure();

  const [, month, day] = due.split(" ");

  const toggleCompletedHandler = async () => {
    await updateDoc(doc(firestore, "tasks", `${id}`), {
      completed: !completed,
    });
  };

  const deleteTaskHandler = async () => {
    await deleteDoc(doc(firestore, "tasks", `${id}`));
  };

  const updateTaskHandler = async (updatedField: {
    taskName: string;
    due: string;
  }) => {
    try {
      await updateDoc(doc(firestore, "tasks", `${id}`), {
        ...updatedField,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack as="li" w="full" borderBottom="1px" borderColor="gray.200" py={1}>
      {!isUpdating && (
        <>
          <TaskCheckbox
            isCompleted={completed}
            onToggleCompleted={toggleCompletedHandler}
          />
          <VStack alignItems="flex-start" spacing="0">
            <Text
              textDecor={completed ? "line-through" : "none"}
              color={completed ? "gray.400" : "black"}
            >
              {taskName}
            </Text>
            {due!! && (
              <Text color="teal" fontSize="xs">{`${day} ${month}`}</Text>
            )}
          </VStack>
          <Spacer />
        </>
      )}
      {!completed && !isUpdating && (
        <PopoverTask
          onDeleteTask={deleteTaskHandler}
          onOpenEditor={onOpenUpdate}
        />
      )}
      {isUpdating && (
        <TaskEdit
          id={id}
          taskName={taskName}
          due={due}
          onCloseEditor={onCloseUpdate}
          onUpdateTask={updateTaskHandler}
        />
      )}
    </HStack>
  );
};

export default TaskItem;
