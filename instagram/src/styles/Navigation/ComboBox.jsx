import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  .search {
    margin-right: 0.3em;
  }
  input {
    flex: 1;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.palette.searchBg};
  }
  
`

export const Wrapper = styled.label`
  position: relative;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.searchBg};
  min-width: 200px;
  padding: 6px;
`;
