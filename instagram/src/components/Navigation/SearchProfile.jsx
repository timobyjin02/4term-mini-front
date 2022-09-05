import styled from "@emotion/styled";
import { useRef, useEffect } from 'react';

function SearchProfile({src}) {
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.onerror = () => { // 이미지 로딩 실패시
      imageRef.current.src = "img/profile.png";
    }
  }, [])

  return (
    <Container>
      <Profile>
        <Image ref={imageRef} alt="search image" src={src || "img/profile.png"}></Image>
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