'use client'
import shapeStyles from'@/styles/Shape.module.css';
import musicStyles from'@/styles/CardMusic.module.css';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { dataProject, stateCardPlay, gridPage } from '@/atoms';

export const Card = ({ data, btnVisible='none' }) => {
    // image, name, description, url, URLrepo
    const setGridPage  = useSetRecoilState( gridPage );
    const setData  = useSetRecoilState( dataProject );
    const cardPlayActive  = useSetRecoilState( stateCardPlay );

    const musicPlay = {
        play: '/images/MusicPlay/playBlack.svg',
        pause: '/images/MusicPlay/pause.svg',
    }

    const handlePlayCard =()=>{
        setGridPage("col-span-2");
        cardPlayActive( true );
        setData( data );
    }

    return (
        <div className={`${musicStyles.cardMusic} relative flex flex-col h-56 w-[170px] p-4 border-ciberBluedark border-2 bg-black`}>
            <div className={`${ shapeStyles.shapeCards } ${musicStyles.cards} flex justify-center items-center h-32 mb-4 bg-ciberBluemedium`}>
                <Image
                    src={ data.image }
                    width={ 100 }
                    height={ 100 }
                    alt='img'
                />
            </div>
            <span className='font-kanit text-2xl'>{ data.name }</span>
            {
                btnVisible === 'block' && (
                <button 
                    className={musicStyles.cardButton + ' absolute right-6 top-20 opacity-0'}
                    onClick={ handlePlayCard }
                >
                    <Image 
                        src={ musicPlay.play } 
                        width={ 50 } 
                        height={ 50 } 
                        alt='play' />
                </button>)
            }
        </div>
    )
}
