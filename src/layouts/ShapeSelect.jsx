import stylesShape from'@/styles/Shape.module.css';

export const ShapeSelect = ({children}) => {
    return (
        <div className={`${stylesShape.shapeSelect} ${ stylesShape.styleScroll } relative w-3/5 mr-4 px-5 pt-9 bg-gradient-to-b from-ciberPink to-black`}>
            <button className='absolute top-0 pt-2 pr-5 right-0 cursor-pointer font-blackOpsOne text-2xl text-ciberWhite'> X </button>
            {children}
        </div>
    )
}
