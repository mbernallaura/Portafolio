import { FaGithubSquare, FaDownload, FaLinkedin } from "react-icons/fa";
import stylesIcon from '@/styles/Icons.module.css';

export const Social = () => {
    return (
        <>
            <div className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaLinkedin className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Linkedin </span>
            </div>

            <div className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaGithubSquare className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Github </span>
            </div>

            <div className={`${stylesIcon.iconDivSocial} flex flex-col gap-2 justify-center items-center`}>
                <FaDownload className={stylesIcon.iconSocial}/>
                <span className={`${stylesIcon.iconText} font-kanit text-ciberWhite`}> Curriculum </span>
            </div>
        </>
    )
}