'use client'
import { useRecoilValue, useSetRecoilState } from 'recoil';  
import { selectedLi, stateMusicPlay, stateSidebar } from '@/atoms';
import styles from '@/styles/Shape.module.css';
import imageStyles from '@/styles/Images.module.css';
import { Logo } from './Logo';
import { SidebarLi } from '@/layouts';

export const Sidebar = () => {
    const setCurrentRoot  = useSetRecoilState( selectedLi );//useSetRecoilState= guardar el valor de un atom
    const sidebarActive = useRecoilValue(stateSidebar);
    const dataMusicPlay = useSetRecoilState( stateMusicPlay ); //useRecoilValue = trae el valor del atom actual

    const icons = {
        about: '/images/sidebar/about.svg',
        proyect: '/images/sidebar/proyects.svg',
        skills: '/images/sidebar/skills.svg'
    }

    const imgs = {
        about: '/images/HeadPage/yo.png',
        projects: '/images/HeadPage/projects.png',
        skills: '/images/HeadPage/skills.png',
    }

    const handleItemClick = ( rout, title, image ) =>{
        setCurrentRoot( rout );
        dataMusicPlay({title: title, image: image});
    }

    return (
        sidebarActive && (
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
                        onClick={() => handleItemClick( '/about', 'Sobre mi', imgs.about)}
                    />

                    <SidebarLi
                        name={'Proyectos'}
                        icon={icons.proyect}
                        href={'/projects'}
                        onClick={() => handleItemClick('/projects', 'Proyectos', imgs.projects)}
                    />

                    <SidebarLi
                        name={'Habilidades'}
                        icon={icons.skills}
                        href={'/skills'}
                        onClick={() => handleItemClick('/skills', 'Habilidades', imgs.skills)}
                    />
                </ul>
            </div>
        </div>
        )
    )
}
