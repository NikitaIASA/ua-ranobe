import { FC, PropsWithChildren } from "react";

import "./container.component.scss"

interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return <div className="container">{children}</div>;
};
