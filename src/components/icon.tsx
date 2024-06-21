import { Box, type BoxProps } from "@mantine/core";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<BoxProps> {
}

export const Icon = ({ children, ...rest }: Props) => (
  <Box {...rest}>
    {children}
  </Box>
)
