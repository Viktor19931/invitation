import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export const SectionTitle = styled.h3`
  color: #676483;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -0.3px;
  font-family: "Caveat", cursive;
`;

export const MainSubtitle = styled.span`
  color: #7a7a7a;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 6.2px;
`;

export const SecondarySubtitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

type DesktopFirstSizes<T> = {
  tablet: T;
  phone: T;
};

type MediaKey = keyof DesktopFirstSizes<number>;

type MediaSizes = {
  [key in MediaKey]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
};

const desktopFirstSizes: DesktopFirstSizes<number> = {
  tablet: 768,
  phone: 414,
};

const setMedia = (size: number) => (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${size}px) {
    ${css(first, ...interpolations)};
  }
`;

export const media: MediaSizes = (Object.keys(
  desktopFirstSizes
) as MediaKey[]).reduce((acc: MediaSizes, label: MediaKey) => {
  acc[label] = setMedia(desktopFirstSizes[label]);

  return acc;
}, {} as MediaSizes);
