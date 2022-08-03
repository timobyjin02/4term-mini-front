import {
  ListBox,
  List,
  ListNumber,
} from "../../styles/UserPage/PostsFollows_style";

function PostsFollows() {
  return (
    <ListBox>
      <List>
        게시물<ListNumber>0</ListNumber>
      </List>
      <List>
        팔로워<ListNumber>50</ListNumber>
      </List>
      <List>
        팔로우<ListNumber>60</ListNumber>
      </List>
    </ListBox>
  );
}

export default PostsFollows;
