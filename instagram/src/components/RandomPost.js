import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
`;

function RandomPost() {
  return (
    <Container>
      <ImageContainer>
        <h1>hihi</h1>
      </ImageContainer>
    </Container>
  );
}

export default RandomPost;
