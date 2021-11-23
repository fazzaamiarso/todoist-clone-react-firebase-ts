import { ButtonGroup, FormControl, Input } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";
import { createNewTask } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";
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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const setDateHandler = (dateSelected: string) => {
    setSelectedDate(dateSelected);
  };

  const AddTaskHandler = async () => {
    if (taskInput === "") return;
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
    <FormControl>
      <Input
        placeholder="Task name"
        value={taskInput}
        onChange={changeHandler}
        ref={inputRef}
      />
      <PopoverSchedule onSelectDate={setDateHandler} />

      <ButtonGroup mt={2}>
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
