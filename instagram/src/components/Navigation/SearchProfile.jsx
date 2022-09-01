import styled from "@emotion/styled";

function SearchProfile() {
  return (
    <Container>
      <Profile>
        <Image alt="search image" src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></Image>
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