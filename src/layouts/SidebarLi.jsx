'use client'
import Link from 'next/link';
import sidebarStyle from '@/styles/Sidebar.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export const SidebarLi = ({ name, href, icon, onClick }) => {
    const endpoint = usePathname();
    
    return (
        <li 
            className={ `${ sidebarStyle.liNeon }  ${ href === endpoint ? sidebarStyle.active : ''} pl-2 mt-4` } 
            onClick={ onClick }
        >
            <Link href={ href } className='flex gap-4 items-center'>
                <Image
                    src={ icon }
                    width={ 24 }
                    height={ 24 }
                    alt='prueba' 
                ></Image>
                <span className={ `${ sidebarStyle.spanPrueba } pt-1 font-teko text-2xl text-ciberWhite` }> { name } </span>
            </Link>
        </li>
    )
}
