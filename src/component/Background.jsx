import React from 'react'

const Background = () => {
    return (
        <div className='w-screen h-screen fixed'>
            <img src="/bg1.jpg" alt="error" className="lg:flex hidden w-screen h-screen fixed inset-0 z-0" />
            <img src="/bg2.jpg" alt="error" className="lg:hidden w-screen h-screen fixed inset-0 z-0" />
        </div>

    )
}

export default Background