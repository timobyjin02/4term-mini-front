import { ImageBox, Image } from "../../styles/Explore/ExploreStyle";

// call PaintImages
function Images({ allPostInfo }) {
  const allPostNum = allPostInfo.length;
  let postCounter = allPostNum - 1;
  const quotient = parseInt(allPostNum / 3);
  const remainder = allPostNum % 3;

  const imageBoxRender = () => {
    const boxArr = [];
    for (let i = 0; i < quotient; i++) {
      boxArr.push(
        <span key={"box" + i}>
          <PaintImages allPostInfo={allPostInfo} />
        </span>
      );
    }
    boxArr.push(
      <PaintImages
        allPostInfo={allPostInfo}
        imageCount={remainder}
        key={"last Box"}
      />
    );
    return boxArr;
  };

  function PaintImages({ allPostInfo, imageCount = 3 }) {
    const imageRender = () => {
      const imageArr = [];
      for (let i = 0; i < imageCount; i++) {
        imageArr.push(
          <span key={postCounter}>
            <Image src={allPostInfo[postCounter].images[0]}></Image>
          </span>
        );
        postCounter--;
      }
      return imageArr;
    };

    return <ImageBox>{imageRender()}</ImageBox>;
  }
  return <>{imageBoxRender()}</>;
}

export default Images;
