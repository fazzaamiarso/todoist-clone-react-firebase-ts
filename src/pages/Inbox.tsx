import { useContext } from "react";
import Main from "../components/Main/Main";
import { TodoContext } from "../store/TodoProvider";

const Inbox: React.FC = () => {
  const { projects, tasks } = useContext(TodoContext);

  const filteredTasks = tasks.filter((task) => task.projectId === "");

  return (
    <>
      <Main projectName={"Inbox"}>
        {filteredTasks.length === 0
          ? []
          : filteredTasks.map((tasks) => {
              return <p>{tasks.taskName}</p>;
            })}
      </Main>
    </>
  );
};

export default Inbox;
