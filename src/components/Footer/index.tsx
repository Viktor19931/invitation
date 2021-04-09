import { FC } from "react";

import Wrapper, {
  Copyright,
  InfoSection,
  // SocialMediaBlock,
  // InstaIcon,
  // FbIcon,
} from "./Wrapper";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  // TODO add icons social media

  return (
    <Wrapper>
      <InfoSection>
        {/* <SocialMediaBlock>
          <a href="https://www.facebook.com/viktor.viktorovich.315">
            <FbIcon className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/viktor932">
            <InstaIcon className="fab fa-instagram" />
          </a>
        </SocialMediaBlock> */}
      </InfoSection>
      <Copyright>{`©${year} Made with Love by Viktor Hardubej`}</Copyright>
    </Wrapper>
  );
};

export default Footer;
