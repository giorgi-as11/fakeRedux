import React from "react";
import preloader from './images/preloader.svg'
let Preloader = () => {
    return (
        <div>
            <img style={{ alignSelf: 'center' }} src={preloader} />
        </div>
    )
}

export default Preloader