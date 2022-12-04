import { useNavigate } from "react-router-dom";
import { Wrapper, List, Item } from "../../styles/Navigation/ComboBoxList";
import SearchProfile from "../Navigation/SearchProfile";

export default function ComboBoxList({
  items,
  loading,
  focus,
  complete,
  searchWord,
}) {
  const navigate = useNavigate();

  if (loading || !focus || !complete || searchWord.length === 0) {
    return null;
  }

  const onclick = (nickname) => {
    navigate(`/${nickname}`);
    window.location.reload();
  };

  return (
    <Wrapper>
      <List>
        {items.length > 0 ? (
          items.map((items, index) => {
            return (
              <Item key={index} onClick={() => onclick(items.nickname)}>
                <SearchProfile src={items.profile_image} />
                <span>{items.nickname}</span>
              </Item>
            );
          })
        ) : (
          <Item>검색 결과가 없습니다</Item>
        )}
      </List>
    </Wrapper>
  );
}
