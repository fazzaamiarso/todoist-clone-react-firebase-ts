import { FaCalendar } from "react-icons/fa";
import PopoverBase from "./PopoverBase";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "@emotion/styled";

interface Props {
  onSelectDate: (newDate: string) => void;
}

const PopoverSchedule: React.FC<Props> = ({ onSelectDate }) => {
  const [value, onChange] = useState(new Date());

  const onChangeHandler = (newDate: Date) => {
    onChange(newDate);
    onSelectDate(newDate.toDateString());
  };

  return (
    <PopoverBase
      customTriggerIcon={<FaCalendar />}
      customTriggerText="Schedule"
    >
      <StyledCalendar
        minDate={new Date()}
        onChange={onChangeHandler}
        value={value}
        prev2Label={null}
        next2Label={null}
      />
    </PopoverBase>
  );
};

const StyledCalendar = styled(Calendar)`
  font-size: 0.8rem;
  width: 300px;
`;

export default PopoverSchedule;
