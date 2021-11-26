import {
  HStack,
  Spacer,
  Text,
  useBoolean,
  useDisclosure,
  useToast,
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
  const toast = useToast();
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
    projectId: string;
  }) => {
    try {
      await updateDoc(doc(firestore, "tasks", `${id}`), {
        ...updatedField,
      });
      toast({
        description: `Project change successful!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack as="li" w="full" borderBottom="1px" borderColor="gray.200">
      {!isUpdating && (
        <>
          <TaskCheckbox
            isCompleted={completed}
            onToggleCompleted={toggleCompletedHandler}
          />
          <VStack alignItems="flex-start" spacing="0" py={4}>
            <Text
              textDecor={completed ? "line-through" : "none"}
              color={completed ? "gray.400" : "black"}
            >
              {taskName}
            </Text>
            {due!! && (
              <Text color="teal" fontSize="xs">
                {due === new Date().toDateString()
                  ? "Today"
                  : due ===
                    new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()
                  ? "Tomorrow"
                  : due.split(" ").slice(1, 3).join(" ")}
              </Text>
            )}
          </VStack>
          <Spacer />
        </>
      )}
      {!completed && !isUpdating && (
        <PopoverTask
          onDeleteTask={deleteTaskHandler}
          onOpenEditor={onOpenUpdate}
          taskName={taskName}
        />
      )}
      {isUpdating && (
        <TaskEdit
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
