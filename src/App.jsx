import { useState } from 'react';
import './index.css';
import Button1 from './Buttons/Button1/Button';
import SunMoon from './Buttons/Button2/Button2';
import Button3 from './Buttons/Button3/Button3';

export default function App() {
  const [isSun, setIsSun] = useState(true);

  const handleClick = () => {
    setIsSun(!isSun);
    if (theme === '#25202b') setTheme('#FFFFFF');
    else setTheme('#25202b');
  };

  const [theme, setTheme] = useState('#FFFFFF');
  return (
    <div style={{ background: theme }} className='app'>
      {/* <Button1 /> */}

      {/* <SunMoon handleClick={handleClick} /> */}

      <Button3 />
    </div>
  );
}
