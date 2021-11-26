import { useContext } from "react";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";
import PageHelmet from "./PageHelmet";

const Today: React.FC = () => {
  const { tasks } = useContext(TodoContext);

  const isTodayTask = new Date().toDateString();
  const filteredTasks = tasks.filter((task) => task.due === isTodayTask);

  return (
    <>
      <PageHelmet title="Today: Todoist Clone" />
      <Main projectName={"Today"} projectId="">
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

export default Today;
