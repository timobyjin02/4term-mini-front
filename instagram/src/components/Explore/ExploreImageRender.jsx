import { ImageBox, Image } from "../../styles/Explore/ExploreStyle";

// call PaintImages
function Images({ count }) {
  const quotient = parseInt(count / 3);
  const remainder = count % 3;

  const imageBoxRender = () => {
    const boxArr = [];
    for (let i = 0; i < quotient; i++) {
      boxArr.push(
        <span key={"box" + i}>
          <PaintImages />
        </span>
      );
      return boxArr;
    }
    boxArr.push(<PaintImages imageCount={remainder} key={"last Box"} />);
    return boxArr;
  };

  return <>{imageBoxRender()}</>;
}

function PaintImages({ imageCount = 3 }) {
  const imageRender = () => {
    const imageArr = [];
    for (let i = 0; i < imageCount; i++) {
      imageArr.push(
        <span key={i}>
          <Image></Image>
        </span>
      );
    }
    return imageArr;
  };

  return <ImageBox>{imageRender()}</ImageBox>;
}

export default Images;
