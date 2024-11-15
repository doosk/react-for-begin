import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  // reactjs는 state를 변화시킬 때 component를 재실행 시킨다
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  // console.log('i run all the time');

  useEffect(() => {
    // 첫번째 인자 : callback 함수
    // 두번째 인자 : 배열에 들어가 값이 변경되면 callback 함수가 실행된다. ([]= 처음 한번만 실행됨)
    // useMemo와 가장 큰 차이점은 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되고, useMemo는 렌더링 중에 실행된다.
    console.log('I run only once.');
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword & counter changes.');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      />
      <h1 className={styles.title}>Welcome back!!! {counter}</h1>
      <Button text={'Continue'} />
      <hr />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
