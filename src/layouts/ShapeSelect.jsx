'use client';
import stylesShape from'@/styles/Shape.module.css';
import { stateCardPlay, gridPage } from '@/atoms';
import { useSetRecoilState } from 'recoil';

export const ShapeSelect = ({children}) => {
    const cardPlayActive  = useSetRecoilState( stateCardPlay );
    const setGridPage  = useSetRecoilState( gridPage );

    const handleCloseCardPlay = ()=> {
        cardPlayActive( false );
        setGridPage("col-span-3")
    }

    return (
        <div className={`${stylesShape.shapeSelect} ${ stylesShape.styleScroll } col-span-1 pt-10 px-5 bg-gradient-to-b from-ciberPink to-black`}>
            <button 
                className='absolute top-0 pt-7 pr-10 right-0 cursor-pointer font-blackOpsOne text-2xl text-ciberWhite'
                onClick={ handleCloseCardPlay }
            > X </button>
            {children}
        </div>
    )
}
