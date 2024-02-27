import React from 'react';
import { Blocks, Grid, InfinitySpin, Oval } from 'react-loader-spinner'


const FullLoader = (props) => {

    const { type = "oval" } = props;

    return (
        <>

            {
                type == "blocks" &&
                <>
                    <Blocks
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"

                    />

                </>
            }
            {

                type == "oval" &&
                <>
                    <Oval
                        height={80}
                        width={80}
                        color="#3C65F5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#3C65F5"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    />

                </>
            }
            {

                type == "infinity" &&
                <>
                    <InfinitySpin
                        width='200'
                        color="#3C65F5"
                    />

                </>
            }
            {

                type == "grid" &&
                <>
                    <Grid
                        height="80"
                        width="80"
                        color="#3C65F5"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />

                </>

            }

        </>
    )
}

export default FullLoader;