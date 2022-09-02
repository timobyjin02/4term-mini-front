import styled from "@emotion/styled";
import DefaultImage from "../../assets/defaultImage.png";

function SearchProfile({src}) {

  return (
    <Container>
      <Profile>
        <Image alt="search image" src={src || DefaultImage}></Image>
      </Profile>
    </Container>
  )
}

export default SearchProfile;

const Container = styled.div`
  padding: 5px;
`

const Profile = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`