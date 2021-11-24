import { FaCalendar, FaMinusCircle, FaStop } from "react-icons/fa";
import PopoverBase from "./PopoverBase";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "@emotion/styled";
import PopoverItem from "./PopoverItem";

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

  const onChangeHandler = (newDate: Date) => {
    onChange(newDate);
    onSelectDate(newDate.toDateString());
  };
  const noDateHandler = () => {
    onChange(null);
    onSelectDate("");
  };

  return (
    <PopoverBase
      customTriggerIcon={<FaCalendar />}
      customTriggerText="Schedule"
    >
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
    </PopoverBase>
  );
};

const StyledCalendar = styled(Calendar)`
  border: none;
  font-size: 0.8rem;
  width: 225px;
`;

export default PopoverSchedule;
