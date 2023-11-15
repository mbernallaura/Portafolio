'use client'
import { stateCardPlay, dataProject } from '@/atoms'
import { useRecoilValue } from 'recoil'
import { ShapePages } from '@/layouts'

export const CardPlay = () => {
    const cardPlayActive = useRecoilValue( stateCardPlay );
    const data = useRecoilValue( dataProject );
    console.log(typeof data);
    console.log('data: ' + data);

    return (
        cardPlayActive &&(
            <ShapePages stylePage={ 'bg-gradient-to-b from-ciberBluedark to-black' }>
                {data.name}
            </ShapePages>
        )
    )
}
