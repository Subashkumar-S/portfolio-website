import React from 'react';

const Button = ({ href,downloadLink, openInNewTab, children, ...rest }) => {
  const handleClick = () => {
    if (openInNewTab && href) {
      window.open(href, '_blank');
    }
  };
  if (downloadLink) {
    return (
      <a
        href={downloadLink}
        download
        className=' text-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:bg-pink hover:text-black border-2 border-solid border-pink uppercase duration-500'
        {...rest}
      >
        {children}
      </a>
    );
  }
  if (openInNewTab && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className=' text-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:bg-pink hover:text-black border-2 border-solid border-pink uppercase duration-500'
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className='text-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:bg-pink hover:text-black border-2 border-solid border-pink uppercase duration-500'
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
