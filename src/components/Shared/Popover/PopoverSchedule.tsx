import { FaCalendar, FaMinusCircle } from "react-icons/fa";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { getDisplayedDate } from "../../../utils/DateConverter";

interface Props {
  onSelectDate: (newDate: string) => void;
  initialDate?: string;
}

const PopoverSchedule: React.FC<Props> = ({
  onSelectDate,
  initialDate = "",
}) => {
  const placementResponsive = useBreakpointValue(["bottom", "left"]);
  const [dateValue, setDateValue] = useState<Date | null>(() => {
    if (initialDate === "") return null;
    else return new Date(initialDate);
  });
  const {
    isOpen,
    onClose: onCloseCalendar,
    onToggle: onToggleCalendar,
  } = useDisclosure();

  const displayedDate = getDisplayedDate(dateValue ?? "");

  const onChangeHandler = (newDate: Date) => {
    onCloseCalendar();
    setDateValue(newDate);
    onSelectDate(newDate.toDateString());
  };
  const noDateHandler = () => {
    onCloseCalendar();
    setDateValue(null);
    onSelectDate("");
  };

  return (
    <Popover
      isLazy
      closeOnBlur
      placement="auto-end"
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
          <StyledCalendar
            minDate={new Date()}
            value={dateValue}
            prev2Label={null}
            next2Label={null}
            onChange={onChangeHandler}
          />
          <PopoverItem
            text="No Date"
            onClick={noDateHandler}
            icon={<FaMinusCircle />}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const StyledCalendar = styled(Calendar)`
  border: none;
  font-size: 0.8rem;
  width: 225px;
`;

export default PopoverSchedule;
