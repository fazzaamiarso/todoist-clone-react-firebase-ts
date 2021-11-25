import {
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { BlockquoteHTMLAttributes } from "react";

interface Props {
  initialValue: string;
  onChangeTitle: (value: string) => void;
}

const EditableControls: React.FC = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup>
      <Button {...getSubmitButtonProps()} color="white" bg="red.400" size="sm">
        Save
      </Button>
      <Button {...getCancelButtonProps()} variant="ghost" size="sm">
        Cancel{" "}
      </Button>
    </ButtonGroup>
  ) : null;
};

const EditableTitle: React.FC<Props> = ({ initialValue, onChangeTitle }) => {
  const submitHandler = (currentValue: string) => {
    if (currentValue === initialValue) return;
    onChangeTitle(currentValue);
  };

  return (
    <Editable
      isPreviewFocusable={true}
      onSubmit={submitHandler}
      submitOnBlur={false}
      fontSize="xl"
      fontWeight="bold"
      selectAllOnFocus={false}
      value={initialValue}
      mb={4}
    >
      <EditablePreview _hover={{ background: "gray.300" }} />
      <EditableInput mb={2} />
      <EditableControls />
    </Editable>
  );
};

export default EditableTitle;
