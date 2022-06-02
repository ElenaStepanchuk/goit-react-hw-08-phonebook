import { useState } from 'react';
import RingLoader from 'react-spinners/RingLoader';
const override = {
  display: 'inherit',
  position: 'relative',
  margin: '450px auto',
  width: '7.1em',
  height: '7.1em',
};
const Spiner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('blue');
  return (
    <div>
      <RingLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
};
export default Spiner;
