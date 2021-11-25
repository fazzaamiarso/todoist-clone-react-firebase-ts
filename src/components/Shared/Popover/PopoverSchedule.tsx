import { FaCalendar, FaEllipsisH, FaMinusCircle, FaStop } from "react-icons/fa";
import PopoverBase from "./PopoverBase";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "@emotion/styled";
import PopoverItem from "./PopoverItem";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  useDisclosure,
  Portal,
} from "@chakra-ui/react";

interface Props {
  onSelectDate: (newDate: string) => void;
  initialDate?: string;
}

const PopoverSchedule: React.FC<Props> = ({
  onSelectDate,
  initialDate = "",
}) => {
  const [dateValue, onChange] = useState<Date | null>(() => {
    if (initialDate === "") return new Date();
    else return new Date(initialDate);
  });
  const {
    isOpen,
    onClose: onCloseCalendar,
    onToggle: onToggleCalendar,
  } = useDisclosure();

  const displayedDate = dateValue
    ?.toDateString()
    .split(" ")
    .slice(1, 3)
    .join(" ");

  const onChangeHandler = (newDate: Date) => {
    onCloseCalendar();
    onChange(newDate);
    onSelectDate(newDate.toDateString());
  };
  const noDateHandler = () => {
    onCloseCalendar();
    onChange(null);
    onSelectDate("");
  };

  return (
    <Popover
      isLazy
      closeOnBlur
      placement="left"
      isOpen={isOpen}
      onClose={onCloseCalendar}
    >
      <PopoverTrigger>
        <Button
          leftIcon={<FaCalendar />}
          variant="outline"
          size="sm"
          onClick={onToggleCalendar}
        >
          {dateValue === null ? "Schedule" : displayedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="max"
        _focus={{ border: "1px", borderColor: "gray.300" }}
        boxShadow="md"
      >
        <PopoverBody display="flex" flexDir="column">
          <PopoverItem
            text="No Date"
            onClick={noDateHandler}
            icon={<FaMinusCircle />}
          />
          <StyledCalendar
            minDate={new Date()}
            value={dateValue}
            prev2Label={null}
            next2Label={null}
            onChange={onChangeHandler}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );

  //   <PopoverBase
  //     customTriggerIcon={<FaCalendar />}
  //     customTriggerText={"Schedule"}
  //   >
  //     <PopoverItem
  //       text="No Date"
  //       onClick={noDateHandler}
  //       icon={<FaMinusCircle />}
  //     />
  //     <StyledCalendar
  //       minDate={new Date()}
  //       value={dateValue}
  //       prev2Label={null}
  //       next2Label={null}
  //       onChange={onChangeHandler}
  //     />
  //   </PopoverBase>
};

const StyledCalendar = styled(Calendar)`
  border: none;
  font-size: 0.8rem;
  width: 225px;
`;

export default PopoverSchedule;
