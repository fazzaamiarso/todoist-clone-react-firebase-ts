import { ButtonGroup, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ActionButton from "../Shared/ActionButton";
import PopoverSchedule from "../Shared/Popover/PopoverSchedule";

interface Props {
  onCloseEditor: () => void;
  onUpdateTask: (updatedField: { taskName: string; due: string }) => void;
  taskName: string;
  id: string;
  due: string;
}

const TaskEdit: React.FC<Props> = ({
  onCloseEditor,
  taskName,
  id,
  due,
  onUpdateTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskInput, setTaskInput] = useState(taskName);
  const [selectedDate, setSelectedDate] = useState(due);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const setDateHandler = (dateSelected: string) => {
    setSelectedDate(dateSelected);
  };

  const editTaskHandler = () => {
    if (taskInput === taskName && selectedDate === due) return;
    onCloseEditor();

    const updatedField = {
      taskName: taskInput,
      due: selectedDate,
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
      <PopoverSchedule onSelectDate={setDateHandler} initialDate={due} />

      <ButtonGroup mt={2}>
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
