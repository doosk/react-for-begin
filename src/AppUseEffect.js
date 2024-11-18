import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

export default function AppUseEffect() {
  // state가 바뀌면 컴포넌트를 재실행 시킨다
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  console.log('i run all the time');

  /*
    - 첫번째 인자 : callback 함수
    - 두번째 인자 : 의존성 배열 = 해당 값이 바뀌면 callback 함수가 실행된다. (객체는 무조건 callback 함수가 실행됨)
    useMemo와 가장 큰 차이점은 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되고, useMemo는 렌더링 중에 실행된다.
  */
  useEffect(() => {
    // [] = 처음 한번만 실행됨
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    // keyword 값이 변경될 때 callback 함수가 실행
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    // keyword, counter 값이 변경될 때 callback 함수가 실행
    console.log('I run when keyword & counter changes.');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type='text'
        placeholder='Search here...'
      />
      <h1 className={styles.title}>Welcome back!!! {counter}</h1>
      <Button text={'Continue'} />
      <hr />
      <button onClick={() => setValue((prev) => prev + 1)}>click me</button>
    </div>
  );
}
