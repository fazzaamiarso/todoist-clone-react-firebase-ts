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
      <Button {...getSubmitButtonProps()} color="white" bg="red.400">
        Save
      </Button>
      <Button {...getCancelButtonProps()}>Cancel </Button>
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
      defaultValue={initialValue}
      onSubmit={submitHandler}
      submitOnBlur={false}
      fontSize="2xl"
      fontWeight="bold"
      selectAllOnFocus={false}
    >
      <EditablePreview _hover={{ background: "gray.300" }} px={2} />
      <EditableInput mb={4} />
      <EditableControls />
    </Editable>
  );
};

export default EditableTitle;
