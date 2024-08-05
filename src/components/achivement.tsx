import type { AchivementType } from "src/data/_types";

interface Props {
  achievementType: AchivementType;
  onClose: () => void;
}

const Achievement = ({ achievementType }: Props) => {
  return <>{achievementType}</>;
};

export default Achievement;
