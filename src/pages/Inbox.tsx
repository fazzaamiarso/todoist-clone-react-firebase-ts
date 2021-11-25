import { useContext } from "react";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";

const Inbox: React.FC = () => {
  const { tasks } = useContext(TodoContext);

  const notCompletedTasks = tasks.filter((task) => task.completed === false);
  const filteredTasks = notCompletedTasks.filter(
    (task) => task.projectId === ""
  );

  return (
    <>
      <Main projectName={"Inbox"} projectId="">
        {filteredTasks.length === 0
          ? []
          : filteredTasks.map((task) => {
              return (
                <TaskItem
                  taskName={task.taskName}
                  completed={task.completed}
                  id={task.id}
                  key={task.id}
                  due={task.due}
                />
              );
            })}
      </Main>
    </>
  );
};

export default Inbox;
