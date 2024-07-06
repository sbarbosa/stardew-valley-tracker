import { Box, Image } from "@mantine/core";
import { getQualityIcon, type ItemQuality } from "src/data/_types";

interface Props {
  icon: string;
  kind?: string;
  quality?: ItemQuality | ItemQuality[];
  size?: number
}

const ItemIcon = ({ icon, quality, kind, size = 30 }: Props) => {
  const displayedQuality = Array.isArray(quality) ? quality[0] : quality;
  const IconPath = kind ? icon.replace('.png', `_${kind}.png`) : icon;

  return (
    <Box component="span" pos="relative" miw={size}>
      <Image src={IconPath} alt="" width={size} height={size} />
      {displayedQuality && displayedQuality !== 'normal' && (
        <Image src={getQualityIcon(displayedQuality)} alt="" width={size} height={size} pos="absolute" top="0" />
      )}
    </Box>
  );
}

export default ItemIcon;
