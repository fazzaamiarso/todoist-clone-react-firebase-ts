import { useContext } from "react";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";
import { getTimeFromDateString } from "../utils/DateConverter";
import PageHelmet from "./PageHelmet";

const Upcoming: React.FC = () => {
  const { tasks } = useContext(TodoContext);

  const notCompletedTasks = tasks.filter((task) => task.completed === false);
  const shouldTaskHaveDue = notCompletedTasks.filter(
    (task) =>
      task.due !== "" &&
      getTimeFromDateString(task.due) !==
        getTimeFromDateString(new Date().toDateString())
  );
  const taskSortedByDue = shouldTaskHaveDue.sort((task1, task2) => {
    return getTimeFromDateString(task1.due) - getTimeFromDateString(task2.due);
  });

  return (
    <>
      <PageHelmet title="Upcoming: Todoist Clone" />
      <Main projectName={"Upcoming"} projectId="">
        {taskSortedByDue.length === 0
          ? []
          : taskSortedByDue.map((task) => {
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

export default Upcoming;
