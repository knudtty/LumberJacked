import React from "react";
import { colors } from "../styles/globals";
import styled from "@emotion/styled";
import Logs from "../components/Logs";
// workout history page, log new workout, etc.
export default function Dashboard() {
  const Container = styled.div<any>((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
    gap: props.gap,
  }));

  return (
    <React.Fragment>
      <Container column gap="10px">
        <Logs />
      </Container>
    </React.Fragment>
  );
}
