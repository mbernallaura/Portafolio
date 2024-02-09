import React from 'react'

export const Logo = ({ widthTitle, widthName }) => {
    return (
        <div className='flex flex-col w-full relative z-10'>
            <label className= {`${ widthTitle } font-bold font-blackOpsOne text-ciberWhite`}>Web Developer</label>
            <label className={ `${ widthName } font-kanit font-normal text-end text-ciberBluelight` }>Laura Bernal</label>
        </div>
    )
}
