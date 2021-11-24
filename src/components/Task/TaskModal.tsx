import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../../store/TodoProvider";
import { createNewTask } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";
import PopoverSchedule from "../Shared/Popover/PopoverSchedule";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { projectId } = useParams();
  const { user } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };
  const closeHandler = () => {
    setTaskInput("");
    onClose();
  };

  const selectDateHandler = (newDate: string) => {
    setSelectedDate(newDate);
  };

  const addNewTask = async () => {
    if (taskInput === "") return;

    onClose();
    setTaskInput("");
    try {
      await createNewTask({
        taskName: taskInput,
        projectId: projectId ?? "",
        userId: user!.uid,
        due: selectedDate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Task</ModalHeader>

        <ModalBody>
          <Input
            placeholder="Task name"
            onChange={inputChangeHandler}
            value={taskInput}
          />
          <PopoverSchedule onSelectDate={selectDateHandler} />
        </ModalBody>

        <ModalFooter>
          <ActionButton
            btnType="primary"
            text="Add task"
            onClick={addNewTask}
          />
          <ActionButton
            btnType="secondary"
            text="Cancel"
            onClick={closeHandler}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
