import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('created :)');
    return () => console.log('destroyed :('); // CleanUp function (function을 리턴하면 component가 없어질 때 호출 된다)
  }, []);
  return <h1>Hello</h1>;
}
export default function AppUseEffectCleanUp() {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={() => setShowing((prev) => !prev)}>
        {showing ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
