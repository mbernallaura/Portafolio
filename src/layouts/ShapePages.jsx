import stylesShape from'@/styles/Shape.module.css';

export const ShapePages = ({ children, stylePage }) => {
    return (
        <div className={`${ stylesShape.shapePages } ${ stylePage } ${ stylesShape.styleScroll } w-full flex flex-col mt-5 ml-4 mr-5 px-5 py-4`}>
            { children }
        </div>
    )
}
