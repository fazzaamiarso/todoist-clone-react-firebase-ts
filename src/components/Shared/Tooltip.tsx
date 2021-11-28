import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltipLabel: string;
}

const Tooltip: React.FC<Props> = ({ children, tooltipLabel }) => {
  return <ChakraTooltip label={tooltipLabel}>{children}</ChakraTooltip>;
};

export default Tooltip;
