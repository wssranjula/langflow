import { IconComponentProps } from "../../types/components";
import { nodeIconsLucide } from "../../utils";

export default function IconComponent({
  name,
  TWstyle,
  iconColor,
}: IconComponentProps): JSX.Element {
  console.log("IconComponent", name, TWstyle, iconColor);
  const TargetIcon = nodeIconsLucide[name] ?? nodeIconsLucide["unknown"];
  return <TargetIcon className={TWstyle} style={{ color: iconColor }} />;
}
