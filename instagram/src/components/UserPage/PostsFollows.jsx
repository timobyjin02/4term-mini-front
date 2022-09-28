import {
  ListBox,
  List,
  ListNumber,
} from "../../styles/UserPage/PostsFollowsStyle";

function PostsFollows({ postData }) {
  return (
    <ListBox>
      <List>
        게시물<ListNumber>{`${Object.keys(postData).length}`}</ListNumber>
      </List>
      <List>
        팔로워<ListNumber>{0}</ListNumber>
      </List>
      <List>
        팔로우<ListNumber>{0}</ListNumber>
      </List>
    </ListBox>
  );
}

export default PostsFollows;
