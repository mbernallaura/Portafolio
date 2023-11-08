import shapeStyles from'@/styles/Shape.module.css';
import musicStyles from'@/styles/CardMusic.module.css';
import Image from 'next/image';

export const Card = ({ img, name }) => {
    const musicPlay = {
        play: '/images/MusicPlay/play.svg',
        pause: '/images/MusicPlay/pause.svg',
    }

    return (
        <div className={`${musicStyles.cardMusic} relative flex flex-col h-56 w-[170px] p-4 border-ciberBluedark border-2 bg-black`}>
            <div className={`${ shapeStyles.shapeCards } flex justify-center items-center h-32 mb-4 bg-ciberBluemedium`}>
                <Image
                    src={ img }
                    width={ 100 }
                    height={ 100 }
                    alt='img'
                />
            </div>
            <span className='font-kanit text-2xl'>{ name }</span>
            <button className='absolute right-6 top-20 opacity-0'>
                <Image
                    src={ musicPlay.play }
                    width={ 50 }
                    height={ 50 }
                    alt='play'
                />
            </button>
        </div>
    )
}
