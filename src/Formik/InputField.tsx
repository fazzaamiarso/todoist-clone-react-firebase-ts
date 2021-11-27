import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Button,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import React from "react";

type InputAttributes = React.ComponentPropsWithoutRef<"input">;

interface Props extends InputAttributes {
  label: string;
}

const InputField: React.FC<Props> = ({ label, name, placeholder, type }) => {
  const { isOpen: show, onToggle } = useDisclosure();
  const toggleShow = () => onToggle();
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => (
        <FormControl isInvalid={!!meta.error && !!meta.touched} isRequired>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          {type === "password" ? (
            <InputGroup>
              <Input
                {...field}
                id={name}
                placeholder={placeholder}
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={toggleShow}
                  variant="ghost"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : (
            <Input {...field} id={name} placeholder={placeholder} type={type} />
          )}
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default InputField;
