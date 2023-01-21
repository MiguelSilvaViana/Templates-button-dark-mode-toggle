import React, { useState } from 'react';
import SunLight from './SunLight';
import HalfMoon from './HalfMoon';

const Button2 = () => {
  const [theme, setTheme] = useState('#FFFFFF');
  const [isSun, setIsSun] = useState(true);

  const handleClick = () => {
    setIsSun(!isSun);
    if (theme === '#25202b') setTheme('#FFFFFF');
    else setTheme('#25202b');
  };

  return (
    <div style={{ background: theme }} className='box'>
      {isSun ? (
        <SunLight handleClick={handleClick} />
      ) : (
        <HalfMoon handleClick={handleClick} />
      )}
    </div>
  );
};

export default Button2;
