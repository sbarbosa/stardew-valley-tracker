import { Card, type CardProps, Group, Text, Image } from "@mantine/core";
import { ItemIcon } from "./item-icon";
import { ItemName } from "./item-name";
import ITEMS_MAP from "src/data/_items";
import type { Bundle as TBundle } from "src/data/_types";

interface Props extends CardProps {
  bundle: TBundle;
}

export const Bundle = ({ bundle, ...props }: Props) => {
  const rewardItem = bundle.reward ? ITEMS_MAP[bundle.reward.id] : undefined;

  return (
    <Card withBorder shadow="sm" radius="md" {...props}>
      <Card.Section withBorder inheritPadding py="xs">
        <ItemName name={bundle.name} icon={bundle.icon} fw={700} />
      </Card.Section>

      <Card.Section inheritPadding mt="md">
        {bundle.items.map(({ id, quantity, quality, kind }, index) => {
          const item = ITEMS_MAP[id];
          return (
            <Group key={`${bundle.id}:${item.id}:${kind}:${index}`}>
              {item.id === 'Purchase' ? (
                <>
                  <ItemIcon icon={item.icon} quality={quality} kind={kind} />
                  <Group gap={4}>
                    <Image src="/img/27px-Gold.png" height={20} />
                    {quantity.toLocaleString()}g
                  </Group>
                </>
              ) : (
                <>
                  <ItemName name={item.name} icon={item.icon} quality={quality} kind={kind} link />
                  {quantity > 1 && (
                    <Text c="dimmed">({quantity})</Text>
                  )}
                </>
              )}
            </Group>
          )
        })}
        {bundle.reward && rewardItem && (
          <>
            <hr />
            <Group>
              <ItemName name={rewardItem.name} icon={rewardItem.icon} quality={bundle.reward.quality} link />
              {bundle.reward.quantity > 1 && (
                <Text c="dimmed">({bundle.reward.quantity})</Text>
              )}
            </Group>
          </>
        )}
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>
    </Card >
  );
};

export default Bundle;
