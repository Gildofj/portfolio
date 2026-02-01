import React, { useEffect, useState } from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  icon: string;
};

export function SvgIcon(props: Props) {
  const [IconComponent, setIconComponent] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const mod = await import(`../../assets/${props.icon}.svg?react`);
        setIconComponent(() => mod.default);
      } catch (e) {
        console.error(e);
        setIconComponent(null);
      }
    };

    importIcon();
  }, [props]);

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
