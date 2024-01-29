import stylesShape from'@/styles/Shape.module.css';

export const ShapeSelect = ({children}) => {
    return (
        <div className={`${stylesShape.shapeSelect} ${ stylesShape.styleScroll } col-span-1 pt-10 px-5 bg-gradient-to-b from-ciberPink to-black`}>
        {/* // <div className={`${stylesShape.shapeSelect} ${ stylesShape.styleScroll } relative w-3/5 mr-4 px-5 pt-9 bg-gradient-to-b from-ciberPink to-black`}> */}
            <button className='absolute top-0 pt-7 pr-10 right-0 cursor-pointer font-blackOpsOne text-2xl text-ciberWhite'> X </button>
            {children}
        </div>
    )
}
