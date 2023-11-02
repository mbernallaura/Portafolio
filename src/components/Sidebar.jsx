'use client'
import { useSetRecoilState } from 'recoil';  
import { selectedLi } from '@/atoms';
import styles from '@/styles/Shape.module.css';
import imageStyles from '@/styles/Images.module.css';
import { Logo } from './Logo';
import { SidebarLi } from '@/layouts';

export const Sidebar = () => {
    const  setCurrentRoot  = useSetRecoilState( selectedLi );
    const icons = {
        about: '/images/sidebar/about.svg',
        proyect: '/images/sidebar/proyects.svg',
        skills: '/images/sidebar/skills.svg'
    }

    const handleItemClick = ( rout ) =>{
        setCurrentRoot( rout );
        console.log('ruta: ' +rout);
    }

    return (
        <div className={`${styles.shapeSidebar} ${imageStyles.imageSidebar} w-1/3 relative z-0`}>
            <div className='w-full h-full pt-20 ml-3 flex justify-center backdrop-blur-md'>
                <ul className=''>
                    <li className='pb-12'>
                        <Logo widthTitle={'text-4xl'} widthName={'text-lg'} />
                    </li>

                    <SidebarLi
                        name={'Sobre mi'}
                        icon={icons.about}
                        href={'/about'}
                        onClick={() => handleItemClick( '/about' )}
                    />

                    <SidebarLi
                        name={'Proyectos'}
                        icon={icons.proyect}
                        href={'/projects'}
                        onClick={() => handleItemClick('/projects')}
                    />

                    <SidebarLi
                        name={'Habilidades'}
                        icon={icons.skills}
                        href={'/skills'}
                        onClick={() => handleItemClick('/skills')}
                    />
                </ul>
            </div>
        </div>
    )
}
