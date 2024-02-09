'use client'
import Image from 'next/image';
import { TitlePage } from './TitlePage'
import shapeStyle from '@/styles/Shape.module.css';
import { Social } from '@/layouts/Social';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataProject, dataProjects } from '@/atoms';

export const MusicPlay = () => {
    const dataSongs = useRecoilValue( dataProjects ); // all array
    const [idSong, setIdSong] = useRecoilState(dataProject); //select song              
    const musicPlay = {
        play: '/images/MusicPlay/play.svg',
        pause: '/images/MusicPlay/pause.svg',
        previous: '/images/MusicPlay/previous.svg',
        next: '/images/MusicPlay/next.svg'
    }
    
    const handleChangeSong = (direction) =>{
        const currentSongIndex = dataSongs.findIndex(song => song.id === idSong.id);
        const nextSongIndex = (currentSongIndex + direction + dataSongs.length) % dataSongs.length;
        setIdSong(dataSongs[nextSongIndex]);
    }

    return (
        <footer className='p-4 w-full absolute bottom-0 flex justify-between items-center bg-ciberBluedark'>
            <TitlePage name={ idSong.name } imgPage={ idSong.image } hImg={ 400 } wImg={ 80 } styleNames={'justify-center'}/>
            <div className='flex flex-col items-center justify-center w-full gap-2'>
                <div className='flex items-center gap-6 '>
                    <button onClick={() => handleChangeSong(-1)}>
                        <Image
                            src={ musicPlay.previous }
                            width={ 40 }
                            height={ 40 }
                            alt='previous'
                        />
                    </button>

                    {/* <button>
                        <Image
                            src={ musicPlay.play }
                            width={ 50 }
                            height={ 50 }
                            alt='play'
                        />
                    </button> */}

                    <Image
                        src={ musicPlay.pause}
                        width={ 52 }
                        height={ 52 }
                        alt='play'
                    />

                    <button onClick={() => handleChangeSong(1)}>
                        <Image
                            src={ musicPlay.next }
                            width={ 40 }
                            height={ 40 }
                            alt='next'
                        />
                    </button>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-blackOpsOne text-xs'> {idSong.id} : 00</span>

                    <div className='w-4/5 h-1 flex items-center border border-ciberBluemedium rounded'>
                        <div
                            className="h-full bg-ciberBluelight rounded"
                            style={{ width: `${(idSong.id / dataSongs.length)* 100}%` }}
                        ></div>
                    </div>

                    <span className='font-blackOpsOne text-xs'> {dataSongs.length} : 00 </span>
                </div>
            </div>
            <div className={`${ shapeStyle.spaceMusicPlay } flex gap-4 justify-end items-center`}>
                <Social/>
            </div>
        </footer>
    )
}

