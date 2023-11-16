'use client'
import { stateCardPlay, dataProject } from '@/atoms';
import { useRecoilValue } from 'recoil';
import { ShapeSelect } from '@/layouts/ShapeSelect';
import cardStyles from'@/styles/CardMusic.module.css';
import Image from 'next/image';

export const CardPlay = () => {
    const cardPlayActive = useRecoilValue( stateCardPlay );
    const data = useRecoilValue( dataProject );
    console.log(typeof data);
    console.log('data: ' + data);

    return (
        cardPlayActive &&(
            <ShapeSelect>
                <div className={`${ cardStyles.cardPlay } relative mb-7 flex h-56 w-auto bg-ciberWhite mt-4`}>
                    <Image
                        src={ data.image }
                        fill={ true }
                        alt="cardPlay"
                    />
                </div>
                <span className='font-blackOpsOne text-3xl'>
                    {data.name} 
                </span>
                <p className='font-kanit'>
                    {data.description}
                </p>
                <div className='flex mt-4 justify-end'>
                    <button className={`${ cardStyles.cardButtonLeft } py-2 px-4 bg-ciberBluemedium`}>
                        Github
                    </button>
                    <button className={`${ cardStyles.cardButtonRight }  py-2 pr-3 pl-6 bg-ciberPurple`}>
                        Sitio Web
                    </button>
                </div>
                
            </ShapeSelect>
        )
    )
}
