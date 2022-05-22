import * as S from './style';

type BoxProps = {
  title: string;
  content?: any;
  size: string;
  color: string;
  fontSize?: string;
  children?: any;
};

const Box = ({ title, content, size, color, fontSize, children }: BoxProps) => (
  <S.Box size={size} color={color}>
    {children ? children : <S.Content fontSize={fontSize}>{content}</S.Content>}

    <S.Title>{title}</S.Title>
  </S.Box>
);

export default Box;
