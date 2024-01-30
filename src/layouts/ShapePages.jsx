'use client';
import stylesShape from'@/styles/Shape.module.css';
import { useRecoilValue } from 'recoil';  
import { gridPage } from '@/atoms';

export const ShapePages = ({ children, stylePage }) => {
    const getGridPage = useRecoilValue(gridPage);

    return (
        <div className={`${ stylesShape.shapePages } ${ stylePage } ${ stylesShape.styleScroll } ${ getGridPage } p-7`}>
            { children }
        </div>
    )
}
