import axios from '../../api/config';
import React from 'react';
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { InputWrapper, Wrapper } from "../../styles/Navigation/ComboBox";
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
  const [complete, setComplete] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [focus, setFocus] = useState(false); 
  const [loading, setLoading] = useState(false);

  const request = useCallback(debounce(async function (value) { // useCallback이 없으면 리렌더링 일어날 때마다 debounce 함수가 계속 생성 (하나만 원하기때문에)
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

  }, 500), []) // side Effect가 일어나면 안되는 함수, 리렌더링이 자주 일어나는 컴포넌트

  const changeHandler = (event) => {
    request(event.target.value);
    setSearchWord(event.target.value); // setSearchWord를 실행하면 컴포넌트 전체에 리렌더링이 일어남
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
        />
      </InputWrapper>
      <ComboBoxList items={items} loading={loading} focus={focus} complete={complete} searchWord={searchWord} />
    </Wrapper>
  )
}

export default ComboBox;

