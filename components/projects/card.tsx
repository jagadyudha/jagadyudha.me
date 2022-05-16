import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Props {
  title: string;
  description: string;
  header: string;
  date: Date;
  slug: string;
  stack: Array<string>;
}

const Card: React.FC<Props> = (props) => {
  const { title, description, header, date, stack, slug } = props;
  return (
    <div className='group prose prose-invert max-w-none flex-none items-center justify-between xl:flex xl:flex-row-reverse '>
      <div className='my-5 ml-0 rounded-md bg-background_100 xl:ml-10'>
        <div className='h-full w-full rounded-md pl-6 pt-6 shadow-xl md:pl-8 md:pt-8 xl:w-[700px]'>
          <Image
            className=' rounded-br-md rounded-tl-md shadow-xl'
            src={header}
            objectFit={'cover'}
            width={'1280'}
            height={'720'}
            layout={'responsive'}
          />
        </div>
      </div>

      <div className='max-w-xl'>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={`/projects/${slug}`} passHref>
          <button className='md:text-md w-full rounded-md bg-white bg-opacity-75 px-5  py-3 text-sm font-normal text-black duration-300 ease-in-out hover:opacity-80 md:px-6 md:py-4 lg:w-2/4'>
            Detail Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;