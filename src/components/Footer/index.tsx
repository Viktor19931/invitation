import { FC } from "react";

import Wrapper from "./Wrapper";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return <Wrapper>{`©${year} Made with Love by Viktor Hardubej`}</Wrapper>;
};

export default Footer;
