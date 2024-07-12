import { Group, Image, ActionIcon, Text } from "@mantine/core";
import { getQualityIcon, type AchivementType, type BundleId, type ItemQuality, type RequiredBy } from "src/data/_types";
import { useMemo, useState } from "react";

import classes from "./style.module.scss";
import Bundle from "./bundle";
import Achievement from "./achivement";

interface Props {
  requiredBy: RequiredBy[];
}

const ItemRequiredBy = ({ requiredBy }: Props) => {
  const [selectedBundleId, setSelectedBundleId] = useState<BundleId>();
  const [selectedAchievementType, setSelectedAchievementType] = useState<AchivementType>();

  const [quantities, bundles, achivements] = useMemo(() => {
    const quantities: Partial<Record<ItemQuality, number>> = {};
    const bundles: Set<BundleId> = new Set();
    const achivements: Set<AchivementType> = new Set();
    for (const required of requiredBy) {
      if (required.type === 'bundle') {
        if (Array.isArray(required.quality)) {
          quantities[required.quality[0]] = (quantities[required.quality[0]] ?? 0) + required.quantity;
        } else {
          quantities[required.quality] = (quantities[required.quality] ?? 0) + required.quantity;
        }

        bundles.add(required.id);
      } else {
        achivements.add(required.type);
      }
    }

    return [quantities, Array.from(bundles), Array.from(achivements)];
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
      {bundles.map((id) => (
        <ActionIcon
          key={id}
          variant="transparent"
          onClick={() => setSelectedBundleId(id)}
        >
          <Image src={`/img/${id}.png`} w={20} h={20} radius="sm" />
        </ActionIcon>
      ))}
      {achivements.map((id) => (
        <ActionIcon
          key={id}
          variant="transparent"
          onClick={() => setSelectedAchievementType(id)}
        >
          <Image src={`/img/${id}.png`} w={20} h={20} radius="sm" />
        </ActionIcon>
      ))}
      {selectedBundleId && (
        <Bundle bundleId={selectedBundleId} onClose={() => setSelectedBundleId(undefined)} />
      )}
      {selectedAchievementType && (
        <Achievement achievementType={selectedAchievementType} onClose={() => setSelectedBundleId(undefined)} />
      )}
    </Group>
  )
};

export default ItemRequiredBy;
