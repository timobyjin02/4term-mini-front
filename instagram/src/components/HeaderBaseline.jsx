import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Posticon } from "../assets/posticon.svg";

function HeaderBaseline() {
  return (
    <>
      <Baseline />
      <DividingLine>
        <Postdiv>
          <Posticon />
          <SpanPost>게시물</SpanPost>
        </Postdiv>
      </DividingLine>
    </>
  );
}

const Baseline = styled.div`
  width: 935px;
  height: 55px;
  border-bottom: 1px solid #dbdbdb;
`;

const DividingLine = styled.div`
  width: 935px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Postdiv = styled.div`
  width: 60px;
  height: 55px;
  border-top: 1px solid #262626;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpanPost = styled.div`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
`;

export default HeaderBaseline;
