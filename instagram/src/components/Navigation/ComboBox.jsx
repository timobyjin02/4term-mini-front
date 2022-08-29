import axios from '../../api/config';
import React from 'react';
import styled from '@emotion/styled';
import Progress from '../Progress';
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { useState } from 'react';
import { useCallback } from 'react';
import ComboBoxList from './ComboBoxList';

function debounce (fn, duration) { // fn (콜백함수), duration(지연 시간)
  let timeout = null // settimeout 기본 함수가 들어갈 변수, 기본값 null
  return function (event) {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn(event)
      timeout = null
    }, duration)
  }
}

function ComboBox() {
  const [items, setItems] = useState([]);
  const [complete, setComplete] = useState(false); // 요청 완료
  const [searchWord, setSearchWord] = useState('');
  const [focus, setFocus] = useState(false); 
  const [loading, setLoading] = useState(false);

  const request = useCallback(debounce(async function (value) {
    if (!value) return;

    setLoading(true); 
    axios.get(`/user/search/${value}`)
      .then(response => {
        setItems(response.data.user)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setComplete(true);
        setLoading(false);
      })

  }, 500), [])

  const changeHandler = (event) => {
    request(event.target.value);
    setSearchWord(event.target.value);
    if(complete) {
      setComplete(false)
    }
  }
  
  return (
    <Wrapper>
      <InputWrapper>
        <SearchIcon className="search" />
        <input 
          onKeyUp={debounce(changeHandler, 1000)} 
          onChange={changeHandler} 
          onFocus={() => {setFocus(true)}}
          onBlur={() => {setFocus(false)}}
        />
        {
          loading && <ProgressWrapper><Progress/></ProgressWrapper>
        }
      </InputWrapper>
      <ComboBoxList items={items} loading={loading} focus={focus} complete={complete} searchWord={searchWord} />
    </Wrapper>
  )
}

export default ComboBox;

const InputWrapper = styled.div`
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

const Wrapper = styled.label`
  position: relative;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.searchBg};
  min-width: 200px;
  padding: 6px;
`;

const ProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`