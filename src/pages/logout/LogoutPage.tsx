import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const LogoutPage = (props: Props) => {
  const history = useNavigate();
  useEffect(() => {
    history("/");
   });
  return (
    <div style={{color: '#ffffff'}}>LogoutPage</div>
  );
};

export default LogoutPage;