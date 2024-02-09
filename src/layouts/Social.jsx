import { FaGithubSquare, FaDownload, FaLinkedin } from "react-icons/fa";
import stylesIcon from '@/styles/Icons.module.css';
import Link from "next/link";

export const Social = () => {
    return (
        <>
            <Link href='https://www.linkedin.com/in/ingeniera-laura-bernal/' target="_blank" className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaLinkedin className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Linkedin </span>
            </Link>

            <Link href='https://github.com/mbernallaura' target="_blank" className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaGithubSquare className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Github </span>
            </Link>

            <Link href='https://acrobat.adobe.com/id/urn:aaid:sc:us:162e7484-35da-45c2-adda-1e4a530d0124' target="_blank" className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaDownload className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Curriculum </span>
            </Link>
        </>
    )
}