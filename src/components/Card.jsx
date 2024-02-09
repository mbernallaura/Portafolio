'use client'
import shapeStyles from'@/styles/Shape.module.css';
import musicStyles from'@/styles/CardMusic.module.css';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { dataProject, stateCardPlay, gridPage, stateMusicPlay } from '@/atoms';
import { useEffect, useState } from 'react';

export const Card = ({ data, btnVisible='none', handle }) => {

    const musicPlay = {
        play: '/images/MusicPlay/playBlack.svg',
        pause: '/images/MusicPlay/pause.svg',
    }

    return (
        <div className={`${musicStyles.cardMusic} relative flex flex-col h-56 w-[170px] p-4 border-ciberBluedark border-2 bg-black `}>
            <div className={`${ shapeStyles.shapeCards } ${musicStyles.cards} flex justify-center items-center h-32 mb-4 bg-ciberBluemedium`}>
                <Image
                    src={ data.image }
                    width={ 100 }
                    height={ 250 }
                    alt='img'
                />
            </div>
            <span className='font-kanit text-2xl'>{ data.name }</span>
            {
                btnVisible === 'block' && (
                <button 
                    className={musicStyles.cardButton + ' absolute right-6 top-20 opacity-0'}
                    onClick={handle}
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
