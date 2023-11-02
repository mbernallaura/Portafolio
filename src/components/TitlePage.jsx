import Image from "next/image"
import shapeStyles from'@/styles/Shape.module.css';



export const TitlePage = ({name, sizeName ,imgPage, wImg, hImg, styleNames}) => {
    return (
        <div className="flex justify-start w-full">
            <div className={`${ shapeStyles.shapeCardPlay }`}>
                <Image
                    src={ imgPage }
                    width={ wImg }
                    height={ hImg }
                    alt="yo"
                />
            </div>
            <div className={`ml-4 flex flex-col ${ styleNames }`}>
                <samp className={`${ sizeName } font-blackOpsOne text-ciberWhite`}> { name } </samp> 
                <span className="font-kanit text-ciberWhite"> Laura Bernal, Desarrolladora web </span>
            </div>
        </div>
    )
}
