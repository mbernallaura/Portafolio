import shapeStyles from'@/styles/Shape.module.css';
import Image from 'next/image';

export const Card = ({ img, name }) => {

    return (
        <div className='h-56 w-[170px] p-4 border-ciberBluedark border-2 bg-black'>
            <div className={`${ shapeStyles.shapeCards } flex justify-center items-center h-32 mb-4 bg-ciberBluemedium`}>
                <Image
                    src={ img }
                    width={ 80 }
                    height={ 80 }
                />
            </div>
            <span className='font-kanit text-2xl'>{ name }</span>
        </div>
    )
}
