import {
  ButtonGroup,
  FormControl,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";
import { createNewTask } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";
import PopoverMoveProject from "../Shared/Popover/PopoverMoveProject";
import PopoverSchedule from "../Shared/Popover/PopoverSchedule";

interface Props {
  onCloseEditor: () => void;
}

const TaskInput: React.FC<Props> = ({ onCloseEditor }) => {
  const { projectId } = useParams();
  const { user } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskInput, setTaskInput] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedProject, setSelectedProject] = useState(projectId ?? "");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const setDateHandler = (dateSelected: string) => {
    setSelectedDate(dateSelected);
  };
  const selectProjectHandler = (id: string) => {
    setSelectedProject(id);
  };

  const AddTaskHandler = async () => {
    if (taskInput === "") return;
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
    setTaskInput("");
  };

  return (
    <FormControl mt={2}>
      <Input
        placeholder="Task name"
        value={taskInput}
        onChange={changeHandler}
        ref={inputRef}
      />
      <ButtonGroup spacing={2}>
        <PopoverSchedule onSelectDate={setDateHandler} />
        <PopoverMoveProject
          projectId={selectedProject ?? ""}
          onSelectProject={selectProjectHandler}
        />
      </ButtonGroup>
      <ButtonGroup mt={2} ml={4} spacing={2}>
        <ActionButton
          btnType="primary"
          text="Add task"
          onClick={AddTaskHandler}
          isDisabled={taskInput === ""}
        />
        <ActionButton
          btnType="secondary"
          text="Cancel"
          onClick={onCloseEditor}
        />
      </ButtonGroup>
    </FormControl>
  );
};

export default TaskInput;
