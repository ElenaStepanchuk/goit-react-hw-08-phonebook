import { useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClipLoader';
const override = {
  display: 'inherit',
  position: 'relative',
  width: '7.1em',
  height: '7.1em',
};
const Spiner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');
  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={input => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
      {/* <ClimbingBoxLoader
        color={color}
        loading={loading}
        css={override}
        size={50}
      /> */}
      <ClimbingBoxLoader
        color={color}
        loading={loading}
        css={override}
        size={50}
      />
    </div>
  );
};
export default Spiner;
