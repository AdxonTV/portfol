import React from 'react';

type LogoProps = {
  color: string;  // Explicitly define the type of 'color' as a string
};

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <svg width="50" height="50" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22.3543" cy="22.3528" r="15.306" transform="rotate(134.68 22.3543 22.3528)" stroke={ color }/>
      <path d="M20.649 22.2346C21.0462 22.6183 21.6793 22.6074 22.063 22.2102C22.4467 21.8129 22.4357 21.1799 22.0385 20.7961L20.649 22.2346ZM17.7411 17.0521C17.1889 17.0616 16.749 17.517 16.7585 18.0692L16.9142 27.0679C16.9237 27.6201 17.3791 28.06 17.9313 28.0504C18.4835 28.0409 18.9234 27.5855 18.9139 27.0333L18.7755 19.0345L26.7743 18.8961C27.3265 18.8866 27.7664 18.4312 27.7569 17.879C27.7473 17.3268 27.2919 16.8869 26.7397 16.8964L17.7411 17.0521ZM22.0385 20.7961L18.4532 17.3327L17.0636 18.7712L20.649 22.2346L22.0385 20.7961Z" fill={ color }/>
      <path d="M22.9219 23.0762L26.3942 26.5099" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="71 71"/>
    </svg>
  );
};

export default Logo;
