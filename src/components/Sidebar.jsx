'use client'
import { useRecoilValue, useSetRecoilState } from 'recoil';  
import { selectedLi, stateMusicPlay, stateSidebar } from '@/atoms';
import styles from '@/styles/Shape.module.css';
import imageStyles from '@/styles/Images.module.css';
import { Logo } from './Logo';
import { SidebarLi } from '@/layouts';
import Link from 'next/link';

export const Sidebar = () => {
    const setCurrentRoot  = useSetRecoilState( selectedLi );//useSetRecoilState= guardar el valor de un atom
    // const dataMusicPlay = useSetRecoilState( stateMusicPlay ); //useRecoilValue = trae el valor del atom actual

    const icons = {
        about: '/images/sidebar/about.svg',
        proyect: '/images/sidebar/proyects.svg',
        skills: '/images/sidebar/skills.svg',
        contact: '/images/sidebar/contact.svg'
    }

    const imgs = {
        about: '/images/HeadPage/yo.png',
        projects: '/images/HeadPage/projects.png',
        skills: '/images/HeadPage/skills.png',
        contact: '/images/HeadPage/contact.jpg'
    }

    const handleItemClick = ( rout, title, image ) =>{
        setCurrentRoot( rout );
    }

    return (
        // sidebarActive && (
            // <div className={`${styles.shapeSidebar} ${imageStyles.imageSidebar} col-span-1 relative z-0`}>
            <div className={`${styles.shapeSidebar} ${imageStyles.imageSidebar} col-span-1 relative z-0`}>
                <div className='w-full h-full pt-10 flex justify-center backdrop-blur-md'>
                    <ul className='w-screen p-10'>
                        <li className='pb-14 flex justify-center'>
                            <div className='w-fit flex cursor-pointer'>
                                <Link href={'/'}>
                                    <Logo widthTitle={'text-4xl'} widthName={'text-lg'} />
                                </Link>
                            </div>
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

                        <SidebarLi
                            name={'Redes'}
                            icon={icons.contact}
                            href={'/contact'}
                            onClick={() => handleItemClick('/contact', 'Redes', imgs.contact)}
                        />
                    </ul>
                </div>
            </div>
        // )
    )
}
