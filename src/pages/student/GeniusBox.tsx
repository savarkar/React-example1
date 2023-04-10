import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const GeniusBox = (props: Props) => {
  const history = useNavigate();
  useEffect(() => {
    history("/all-courses");
   });
  return (
    <div style={{color: '#ffffff'}}>Genius Box</div>
  );
};

export default GeniusBox;