import stylesShape from'@/styles/Shape.module.css';

export const ShapePages = ({ children, stylePage }) => {
    return (
        <div className={`${ stylesShape.shapePages } ${ stylePage } ${ stylesShape.styleScroll } w-full flex flex-col mt-5 ml-7 mr-4 px-6 py-4`}>
            { children }
        </div>
    )
}
