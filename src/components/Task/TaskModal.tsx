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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { projectId } = useParams();
  const { user } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
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
        due: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Task</ModalHeader>

        <ModalBody>
          <Input
            placeholder="Task name"
            onChange={inputChangeHandler}
            value={taskInput}
          />
        </ModalBody>

        <ModalFooter>
          <ActionButton
            btnType="primary"
            text="Add task"
            onClick={addNewTask}
          />
          <ActionButton btnType="secondary" text="Cancel" onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
