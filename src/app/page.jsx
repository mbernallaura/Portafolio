import imageStyles from '@/styles/Images.module.css';
import styles from'@/styles/Shape.module.css';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

export const LandingPage = () => {
    return (
        <main className={`${ styles.shapeDiv } mx-8 h-screen`}>
            <div className={ `${imageStyles.imageLanding} w-full h-full flex flex-col items-center justify-center` }>
                <div className='flex flex-col items-center justify-center'>
                    <Logo widthTitle={ 'text-8xl' } widthName={ 'text-3xl' }/>
                    <Link href={ '/about' }>
                        <button className={`${styles.shapeBtn} p-3 px-14 mt-3 font-teko font-medium text-2xl border-l-4 border-b-4 border-ciberBluelight bg-ciberPink text-ciberWhite`}>
                            Comenzar
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default LandingPage;
