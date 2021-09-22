import React from "react";
import { FiUsers } from "react-icons/fi";

import {
  Colors,
  Container,
  ContainerTitle,
  Span,
} from "../assets/styles/style";

const PROP = {
  containerCounter: {
    flexWrap: "wrap",
    padding: "20px",
    margin: "2rem 10px",
    background: Colors.defaultPrimaryColor,
  },
  containerTextCounter: {
    width: "80%",
    alignItems: "center",
  },
  iconTextCounter: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px 0 0 8px",
    color: Colors.textPrimaryColor,
    fontSize: "2rem",
  },
  TitleTextCounter: {
    color: Colors.textPrimaryColor,
  },
  containerNumberCounter: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px 0 0 8px",
    color: Colors.textPrimaryColor,
    fontSize: "2rem",
  },
  SpanNumberCounter: {
    backgroundColor: Colors.textPrimaryColor,
    radius: '10px',
    color:Colors.darkPrimaryColor,
    fontWeight: '700',
    padding: "15px 20px",
    lineHeight: "initial",
  },
};

const UserCounter = () => {
  return (
    <Container
      flexWrap={PROP.containerCounter.flexWrap}
      padding={PROP.containerCounter.padding}
      margin={PROP.containerCounter.margin}
      background={PROP.containerCounter.background}
    >
      <Container
        width={PROP.containerTextCounter.width}
        alignItems={PROP.iconTextCounter.alignItems}
      >
        <Container
          width={PROP.iconTextCounter.width}
          height={PROP.iconTextCounter.height}
          justifyContent={PROP.iconTextCounter.justifyContent}
          alignItems={PROP.iconTextCounter.alignItems}
          radius={PROP.iconTextCounter.borderRadius}
          color={PROP.iconTextCounter.color}
          fontSize={PROP.iconTextCounter.fontSize}
        >
          <FiUsers />
        </Container>
        <ContainerTitle color={PROP.TitleTextCounter.color}>
          Usuarios registados hasta la fecha
        </ContainerTitle>
      </Container>

      <Container
        width={PROP.containerNumberCounter.width}
        height={PROP.containerNumberCounter.height}
        justifyContent={PROP.containerNumberCounter.justifyContent}
        alignItems={PROP.containerNumberCounter.alignItems}
        radius={PROP.containerNumberCounter.borderRadius}
        color={PROP.containerNumberCounter.color}
        fontSize={PROP.containerNumberCounter.fontSize}
      >
        <Span
          backgroundColor={PROP.SpanNumberCounter.backgroundColor}
          radius={PROP.SpanNumberCounter.radius}
          color={PROP.SpanNumberCounter.color}
          fontWeight={PROP.SpanNumberCounter.fontWeight}
          padding={PROP.SpanNumberCounter.padding}
          lineHeight={PROP.SpanNumberCounter.lineHeight}
        >
          500
        </Span>
      </Container>
    </Container>
  );
};

export default UserCounter;
