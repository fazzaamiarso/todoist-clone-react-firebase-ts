import PopoverBase from "./PopoverBase";
import PopoverItem from "./PopoverItem";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

interface Props {
  onDeleteProject: () => void;
  onOpenEditor: () => void;
}

const PopoverProject: React.FC<Props> = ({ onDeleteProject, onOpenEditor }) => {
  const deleteHandler = () => {
    onDeleteProject();
  };

  return (
    <PopoverBase>
      <PopoverItem
        icon={<FaPencilAlt />}
        text="Edit project"
        onClick={onOpenEditor}
      />
      <PopoverItem
        icon={<FaTrash />}
        text="Delete project"
        onClick={deleteHandler}
      />
    </PopoverBase>
  );
};

export default PopoverProject;
