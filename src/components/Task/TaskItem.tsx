import {
  HStack,
  Spacer,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { getDisplayedDate } from "../../utils/DateConverter";
import { deleteTask, updateTask } from "../../utils/firestore";
import PopoverTask from "../Shared/Popover/PopoverTask";
import TaskCheckbox from "./TaskCheckbox";
import TaskEdit from "./TaskEdit";

interface Props {
  taskName: string;
  completed: boolean;
  id: string;
  due: string;
}

const TaskItem: React.FC<Props> = ({
  taskName,
  completed,
  id: taskId,
  due,
}) => {
  const toast = useToast();
  const {
    isOpen: isUpdating,
    onClose: onCloseUpdate,
    onOpen: onOpenUpdate,
  } = useDisclosure();

  const displayedDate = getDisplayedDate(due);

  const toggleCompletedHandler = async () => {
    try {
      await updateTask(taskId, {
        completed: !completed,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskHandler = async () => {
    await deleteTask(taskId);
  };

  const updateTaskHandler = async (updatedField: {
    taskName: string;
    due: string;
    projectId: string;
  }) => {
    try {
      await updateTask(taskId, updatedField);
      toast({
        description: `Update successful!`,
        status: "success",
        duration: 5000,
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
                {displayedDate}
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
