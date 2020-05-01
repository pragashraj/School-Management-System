import React from 'react'
import Ticker from 'react-ticker'

import img01 from '../assets/img01.JPG'
 
const MoveStuffAround = () => {
    return(
        <div>
            <Ticker>
            {
                ({ index }) => (
                    <div>
                        <img src={img01} alt="" className="move"/>
                    </div>
                )
            }
            </Ticker>
        </div>
       
    )
}
   
export default MoveStuffAround