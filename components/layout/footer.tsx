import React from 'react';

function footer() {
  return (
    <footer className='border-white  border-t my-10 border-opacity-10  max-w-2xl px-8 mx-auto'>
      <h1 className='font-semibold text-sm text-gray-300 text-center mt-10 mb-1'>
        Created by{' '}
        <a
          className='text-myorange hover:underline'
          href='https://github.com/jagadyudha'
        >
          Jagad Yudha Awali.
        </a>
      </h1>
      <h2 className='font-semibold text-sm text-gray-300 text-center mb-2'>
        Powered by{' '}
        <a
          className='text-myorange hover:underline'
          href='https://reactjs.org/'
        >
          React.js
        </a>
        ,{' '}
        <a className='text-myorange hover:underline' href='https://nextjs.org/'>
          Next.js
        </a>
        ,{' '}
        <a
          className='text-myorange hover:underline'
          href='https://tailwindcss.com/'
        >
          Tailwindcss.
        </a>{' '}
      </h2>
      <h3 className='font-semibold text-sm text-gray-300 text-center mb-1'>
        Code licensed under the{' '}
        <a
          className='text-myorange hover:underline'
          href='https://github.com/jagadyudha/jagadyudha.me'
        >
          MIT License.
        </a>
      </h3>
    </footer>
  );
}

export default footer;