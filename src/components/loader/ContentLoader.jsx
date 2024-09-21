import React from 'react';
import { Blocks, ProgressBar } from 'react-loader-spinner'


const ContentLoader = () => {
    return (
        <>
            <div className='content-loader'>
                <ProgressBar
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
               
            </div>
        </>
    )
}

export default ContentLoader;