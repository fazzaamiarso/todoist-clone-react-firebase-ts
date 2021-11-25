import { ButtonGroup, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ActionButton from "../Shared/ActionButton";
import PopoverMoveProject from "../Shared/Popover/PopoverMoveProject";
import PopoverSchedule from "../Shared/Popover/PopoverSchedule";

interface Props {
  onCloseEditor: () => void;
  onUpdateTask: (updatedField: { taskName: string; due: string }) => void;
  taskName: string;
  due: string;
}

const TaskEdit: React.FC<Props> = ({
  onCloseEditor,
  taskName,
  due,
  onUpdateTask,
}) => {
  const { projectId } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskInput, setTaskInput] = useState(taskName);
  const [selectedDate, setSelectedDate] = useState(due);
  const [selectedProject, setSelectedProject] = useState(projectId ?? "");

  const isEqualToInitialState =
    taskInput === taskName &&
    selectedDate === due &&
    selectedProject === projectId;

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

  const editTaskHandler = () => {
    if (isEqualToInitialState) return;
    onCloseEditor();

    const updatedField = {
      taskName: taskInput,
      due: selectedDate,
      projectId: selectedProject,
    };
    onUpdateTask(updatedField);
  };

  return (
    <FormControl>
      <Input
        placeholder="Task name"
        value={taskInput}
        onChange={changeHandler}
        ref={inputRef}
      />
      <ButtonGroup spacing={2}>
        <PopoverSchedule onSelectDate={setDateHandler} initialDate={due} />
        <PopoverMoveProject
          projectId={selectedProject ?? ""}
          onSelectProject={selectProjectHandler}
        />
      </ButtonGroup>
      <ButtonGroup mt={2} ml={4}>
        <ActionButton
          btnType="primary"
          text="Save"
          onClick={editTaskHandler}
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

export default TaskEdit;
