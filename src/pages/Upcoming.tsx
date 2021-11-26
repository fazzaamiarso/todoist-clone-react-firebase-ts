import { useContext } from "react";
import Main from "../components/Main/Main";
import TaskItem from "../components/Task/TaskItem";
import { TodoContext } from "../store/TodoProvider";

const Upcoming: React.FC = () => {
  const { tasks } = useContext(TodoContext);

  const notCompletedTasks = tasks.filter((task) => task.completed === false);
  const shouldTaskHaveDue = notCompletedTasks.filter(
    (task) =>
      task.due !== "" &&
      new Date(task.due).getTime() !==
        new Date(new Date().toDateString()).getTime()
  );
  const taskSortedByDue = shouldTaskHaveDue.sort((task1, task2) => {
    return new Date(task1.due).getTime() - new Date(task2.due).getTime();
  });

  return (
    <>
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
