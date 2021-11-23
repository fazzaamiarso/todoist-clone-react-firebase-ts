import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

interface Props {
  onDeleteTask: () => void;
}

const PopoverTask: React.FC<Props> = ({ onDeleteTask }) => {
  const deleteHandler = () => {
    onDeleteTask();
  };

  return (
    <PopoverBase>
      <PopoverItem icon={<FaPencilAlt />} text="Edit task" onClick={() => {}} />
      <PopoverItem
        icon={<FaTrash />}
        text="Delete task"
        onClick={deleteHandler}
      />
    </PopoverBase>
  );
};

export default PopoverTask;
