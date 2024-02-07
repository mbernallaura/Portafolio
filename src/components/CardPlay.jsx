'use client'
import Image from 'next/image';
import Link from 'next/link';
import { stateCardPlay, dataProject } from '@/atoms';
import { useRecoilValue } from 'recoil';
import { ShapeSelect } from '@/layouts/ShapeSelect';
import cardStyles from'@/styles/CardMusic.module.css';
import { FaGithubSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const CardPlay = () => {
    const cardPlayActive = useRecoilValue( stateCardPlay );
    const data = useRecoilValue( dataProject );

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
                    <Link href={`${data.URLrepo}`} target="_blank" className={`${ cardStyles.cardButtonLeft } flex items-center gap-1 py-2 px-4 font-kanit text-ciberWhite bg-ciberBluemedium`}>
                        <FaGithubSquare/>
                        Github
                    </Link>
                    <Link href={`${data.url}`} target="_blank" className={`${ cardStyles.cardButtonRight } flex items-center gap-1 py-2 pr-3 pl-6 font-kanit text-ciberWhite bg-ciberPink`}>
                        <TbWorld/>
                        Website
                    </Link>
                </div>
                
            </ShapeSelect>
        )
    )
}
