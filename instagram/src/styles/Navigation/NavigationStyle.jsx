import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

// const Navigation = styled.div`
//   position: fixed;
//   top: 0;
//   z-index: 2;
//   width: 100%;
//   height: 60px;
//   display: flex;
// `;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 0 auto; */
  padding: 1em 0 0.9em 0;
`;

export const ImgLogo = styled.img`
  padding: 0 1 rem;
  width: 100px;
  cursor: pointer;
`;

export const Search = styled.div`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.searchBg};
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px;
  .search {
    width: 13px;
    margin-right: 0.3em;
  }

  input {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.palette.searchBg};
  }
`;
