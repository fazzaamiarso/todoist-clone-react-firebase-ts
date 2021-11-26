import {
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  let location = useLocation();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [location]);

  const submitHandler = (currentValue: string) => {
    if (currentValue === initialValue) return;
    onChangeTitle(currentValue);
  };
  const changeHandler = (nextValue: string) => {
    setValue(nextValue);
  };

  return (
    <Editable
      isPreviewFocusable={true}
      onSubmit={submitHandler}
      onChange={changeHandler}
      submitOnBlur={false}
      fontSize="xl"
      fontWeight="bold"
      selectAllOnFocus={false}
      value={value}
      mb={4}
    >
      <EditablePreview _hover={{ background: "gray.300" }} />
      <EditableInput mb={2} />
      <EditableControls />
    </Editable>
  );
};

export default EditableTitle;
