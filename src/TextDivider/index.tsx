import React from "react";
import styled from "styled-components";

interface TextDividerProps {
  text: string;
  textColor: string;
  dividerColor: string;
  size?: string;
}

const Divider = styled.div`
  display: flex;
  align-items: center;
`;

const DividerLine = styled.div<{ backgroundColor: string }>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  padding: 3px;
  margin: 5px;
`;

const Text = styled.div<{ textColor: string; size?: string }>`
  padding: 0 10px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => (props.size ? `${props.size}px` : "inherit")};
`;

const TextDivider: React.FC<TextDividerProps> = ({
  text,
  dividerColor,
  textColor,
  size,
}) => {
  return (
    <Divider>
      <DividerLine backgroundColor={dividerColor} />
      <Text textColor={textColor} size={size}>
        {text}
      </Text>
      <DividerLine backgroundColor={dividerColor} />
    </Divider>
  );
};

export default TextDivider;
