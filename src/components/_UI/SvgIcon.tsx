"use client";

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
        const icons = require.context("../../public/assets", false, /\.svg$/);
        const mod = icons(`${props.icon}.svg`);
        setIconComponent(() => mod.default);
      } catch {
        setIconComponent(null);
      }
    };

    importIcon();
  }, [props]);

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
