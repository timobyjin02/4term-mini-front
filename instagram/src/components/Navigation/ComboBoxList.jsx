import styled from "@emotion/styled";

export default function ComboBoxList({items, loading, focus, complete, searchWord}) {

  if(loading || !focus || !complete || searchWord.length === 0){
    return null;
  }

  return(
    <Wrapper>
      <List>
        {items.length > 0 ? (items.map((_,index)=> {
          return <Item key={index}>{index}</Item>
        })) : <Item>검색 결과가 없습니다</Item>}
      </List>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: white;
  z-index: 999;
  border: 1px solid #f7f7f7;
  box-shadow: 0 2px 1px 0px rgba(0, 0, 0, .08);
  width: 100%;
`;

const List = styled.ul``;

const Item = styled.li`
  padding: 6px 10px;
  transition: all 0.25s;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;