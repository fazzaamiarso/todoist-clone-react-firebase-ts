import {
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";

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
    // onChangeTitle(currentValue);
  };

  return (
    <Editable
      isPreviewFocusable={true}
      defaultValue={initialValue}
      onSubmit={submitHandler}
      submitOnBlur={false}
      fontSize="2xl"
      fontWeight="bold"
    >
      <EditablePreview />
      <EditableInput mb={4} />
      <EditableControls />
    </Editable>
  );
};

export default EditableTitle;
