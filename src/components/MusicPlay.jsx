'use client'
import Image from 'next/image';
import { TitlePage } from './TitlePage'
import shapeStyle from '@/styles/Shape.module.css';
import { Social } from '@/layouts/Social';
import { useRecoilValue } from 'recoil';
import { stateMusicPlay } from '@/atoms';

export const MusicPlay = () => {
    const dataMusicPlay  = useRecoilValue( stateMusicPlay );
    const musicPlay = {
        play: '/images/MusicPlay/play.svg',
        pause: '/images/MusicPlay/pause.svg',
        previous: '/images/MusicPlay/previous.svg',
        next: '/images/MusicPlay/next.svg'
    }
    
    // const prueba = '/images/HeadPage/yo.png';

    return (
        <footer className='px-3 w-full absolute bottom-0 flex justify-between bg-ciberBluedark'>
            <div className={ `${ shapeStyle.spaceMusicPlay } flex justify-center items-center` }>
                <TitlePage name={ dataMusicPlay.title } imgPage={ dataMusicPlay.image } hImg={ 80 } wImg={ 80 } styleNames={'justify-center'}/>
            </div>
            <div className={`${ shapeStyle.spaceMusicPlay } flex-colum items-center justify-center`}>
                <div className='pt-4 flex items-center justify-center gap-6 '>
                    <button>
                        <Image
                            src={ musicPlay.previous }
                            width={ 40 }
                            height={ 40 }
                            alt='previous'
                        />
                    </button>

                    <button>
                        <Image
                            src={ musicPlay.play }
                            width={ 50 }
                            height={ 50 }
                            alt='play'
                        />
                    </button>

                    {/* <Image
                        src={ musicPlay.pause}
                        width={ 52 }
                        height={ 52 }
                        alt='play'
                    /> */}

                    <button>
                        <Image
                            src={ musicPlay.next }
                            width={ 40 }
                            height={ 40 }
                            alt='next'
                        />
                    </button>
                </div>
                <div className='pb-4 flex items-center justify-center'>
                    --------------------------------------------
                </div>
            </div>
            <div className={`${ shapeStyle.spaceMusicPlay } flex gap-4 justify-end items-center`}>
                <Social/>
            </div>
        </footer>
    )
}

