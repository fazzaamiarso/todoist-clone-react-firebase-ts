import { ButtonGroup, FormControl, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";
import { createNewTask } from "../../utils/firestore";
import ActionButton from "../Shared/ActionButton";

interface Props {
  onCloseEditor: () => void;
}

const TaskInput: React.FC<Props> = ({ onCloseEditor }) => {
  const { projectId } = useParams();
  const { user } = useContext(TodoContext);
  const [taskInput, setTaskInput] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };
  const AddTaskHandler = async () => {
    if (taskInput === "") return;
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
    <FormControl>
      <Input
        placeholder="Task name"
        value={taskInput}
        onChange={changeHandler}
      />
      <ButtonGroup mt={2}>
        <ActionButton
          btnType="primary"
          text="Add task"
          onClick={AddTaskHandler}
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
