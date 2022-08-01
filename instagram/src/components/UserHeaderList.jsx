import React from "react";
import styled from "@emotion/styled";

function UserHeaderList() {
  return (
    <UlList>
      <LiList>
        <div>
          게시물<SpanListNumber>0</SpanListNumber>
        </div>
      </LiList>
      <LiList>
        <div>
          팔로워<SpanListNumber>50</SpanListNumber>
        </div>
      </LiList>
      <LiList>
        <div>
          팔로우<SpanListNumber>60</SpanListNumber>
        </div>
      </LiList>
    </UlList>
  );
}

const UlList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin-bottom: 20px;
`;

const LiList = styled.li`
  list-style: none;
  margin-left: 0px;
  margin-right: 40px;
`;

const SpanListNumber = styled.span`
  margin-left: 5px;
  font-weight: 600;
`;

export default UserHeaderList;
