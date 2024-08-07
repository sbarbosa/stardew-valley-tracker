import { Group, Text, Image, Modal, Stack, rem } from "@mantine/core";
import type { BundleId } from "src/data/_types";
import ItemName from "./item-name";
import ItemIcon from "./item-icon";
import BUNDLE_MAP from "src/data/_bundles";
import ITEMS_MAP from "src/data/_items";

const BASE_URL = import.meta.env.BASE_URL;

interface Props {
  bundleId: BundleId;
  onClose: () => void;
}

const Bundle = ({ bundleId, onClose }: Props) => {
  const bundle = BUNDLE_MAP[bundleId];
  const rewardItem = bundle.reward ? ITEMS_MAP[bundle.reward.id] : undefined;

  return (
    <Modal opened={true} onClose={onClose} title={<ItemName name={bundle.name} icon={bundle.icon} fw={700} />} centered>
      <Group gap="lg">
        <Image src={`${BASE_URL}/img/${bundle.id}.png`} w={120} h={120} radius="sm" visibleFrom="xs" />
        <Stack gap={rem(2)}>
          {Array.from(Array(bundle.required)).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: All values from autogenerated array are undefined. Need to use the index as key
            <Image key={`slot_${index}`} src={`${BASE_URL}/img/Bundle_Slot.png`} w={20} h={20} />
          ))}
        </Stack>
        <Stack gap="xs">
          {bundle.items.map(({ id, quantity, quality, kind }, index) => {
            const item = ITEMS_MAP[id];
            return (
              <Group key={`${item.id}:${index}`}>
                {item.id === 'Purchase' ? (
                  <>
                    <ItemIcon icon={item.icon} quality={quality} kind={kind} />
                    <Group gap={4}>
                      <Image src="${BASE_URL}/img/27px-Gold.png" height={20} />
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
        </Stack>
      </Group>
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
    </Modal>
  );
};

export default Bundle;
