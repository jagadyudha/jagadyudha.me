import Image from 'next/image';
import { IoArrowForwardOutline } from 'react-icons/io5';

export interface SpotifyProps {
  items:any
}

const Spotify : React.FC<SpotifyProps> = ({ items }) => {
  return (
    <div className='mb-16 container'>
      <h1 className='font-sans font-bold text-white  sm:text-4xl text-3xl mb-1'>
        Top Tracks
      </h1>
      <p className='font-sans font-normal sm:text-lg text-md text-gray-300  mb-10'>
        What I&apos;m currently listening to.
      </p>

      <div>
        {items.slice(0, 5).map((item:any, index:number) => {
          const trackName = item.track.name;
          const trackImg = item.track.album.images[0].url;
          const trackUrl = item.track.external_urls.spotify;
          const trackArtist = item.track.artists[0].name;
          return (
            <div key={index} className='border-b border-opacity-20'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={trackUrl}
                className='flex my-5'
              >
                <p className='font-sans font-normal text-gray-300  text-lg my-auto mr-5'>
                  {index + 1}
                </p>
                <div className='mr-3 my-auto'>
                  <Image
                    layout='fixed'
                    width={44}
                    height={44}
                    className='rounded-md mr-3'
                    src={trackImg}
                    alt={trackName}
                  ></Image>
                </div>
                <div>
                  <p className='font-sans font-semibold text-white  sm:text-lg text-md'>
                    {trackName.length > 40
                      ? `${trackName.slice(0, 40)}...`
                      : trackName}
                  </p>
                  <p className='sm:text-lg text-md font-sans font-normal text-gray-300'>
                    {trackArtist}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <a
        href='https://open.spotify.com/user/zhof3odxndrrhfp6qxnga05ld'
        rel='noopener noreferrer'
        target='_blank'
        className='justify-left flex text-center items-center my-5 mt-10'
      >
        <span className='font-sans font-semibold text-lg text-myorange mr-2'>
          View Spotify Profile
        </span>
        <IoArrowForwardOutline className=' text-myorange text-2xl' />
      </a>
    </div>
  );
};

export default Spotify;