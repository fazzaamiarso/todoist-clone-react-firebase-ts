import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../../store/TodoProvider";
import { createNewTask } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";
import PopoverMoveProject from "../Shared/Popover/PopoverMoveProject";
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
  const [selectedProject, setSelectedProject] = useState(projectId ?? "");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };
  const closeHandler = () => {
    onClose();
    setTaskInput("");
  };

  const selectDateHandler = (newDate: string) => {
    setSelectedDate(newDate);
  };
  const selectProjectHandler = (id: string) => {
    setSelectedProject(id);
  };

  const addNewTask = async () => {
    onClose();
    setTaskInput("");
    try {
      await createNewTask({
        taskName: taskInput,
        projectId: selectedProject,
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
            mb={4}
          />
          <ButtonGroup spacing={2}>
            <PopoverSchedule onSelectDate={selectDateHandler} />
            <PopoverMoveProject
              projectId={projectId ?? ""}
              onSelectProject={selectProjectHandler}
            />
          </ButtonGroup>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup spacing={4}>
            <ActionButton
              btnType="primary"
              text="Add task"
              onClick={addNewTask}
              isDisabled={taskInput === ""}
            />
            <ActionButton
              btnType="secondary"
              text="Cancel"
              onClick={closeHandler}
            />
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
