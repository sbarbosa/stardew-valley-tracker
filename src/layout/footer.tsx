import { Code, Flex } from "@mantine/core";
import { Trans } from "react-i18next";

export const Footer = () => {
  return (
    <Flex justify="flex-end" gap="xs">
      <Trans i18nKey="app.version" values={{ version: APP_VERSION }} components={{ code: <Code fw={700} /> }} />
    </Flex>
  );
}
