import { Group, Image, ActionIcon, Text } from "@mantine/core";
import { getQualityIcon, type AchivementType, type BundleId, type ItemQuality, type RequiredBy } from "src/data/_types";
import { useMemo } from "react";

import classes from "./style.module.scss";

interface Props {
  requiredBy: RequiredBy[];
}

const ItemRequiredBy = ({ requiredBy }: Props) => {
  const [quantities, requirements] = useMemo(() => {
    const quantities: Partial<Record<ItemQuality, number>> = {};
    const requirements: Set<BundleId | AchivementType> = new Set();
    for (const required of requiredBy) {
      if (required.type === 'bundle') {
        if (Array.isArray(required.quality)) {
          quantities[required.quality[0]] = (quantities[required.quality[0]] ?? 0) + required.quantity;
        } else {
          quantities[required.quality] = (quantities[required.quality] ?? 0) + required.quantity;
        }

        requirements.add(required.id);
      } else {
        requirements.add(required.type);
      }
    }

    return [quantities, Array.from(requirements)];
  }, [requiredBy]);

  return (
    <Group gap="xs" className={classes.item_required_by}>
      {Object.entries(quantities).map((entry) => {
        const [quality, quantity] = entry as [ItemQuality, number];
        return (
          <Group key={quality} gap={0}>
            {quality !== 'normal' && (
              <div className={classes.required_quality}>
                <Image src={getQualityIcon(quality)} alt="" width={18} height={18} />
              </div>
            )}
            <Text size="xs">
              x{quantity}
            </Text>
          </Group>
        )
      })}
      {requirements.map((id) => (
        <ActionIcon
          key={id}
          variant="transparent">
          <Image src={`/img/${id}.png`} w={20} h={20} radius="sm" />
        </ActionIcon>
      ))}
    </Group>
  )
};

export default ItemRequiredBy;
