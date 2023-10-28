// import ReactPlayer from 'react-player';
import React from 'react';
function PlayerComponent() {
   return (
      <div>
            {/* <ReactPlayer
            className='react-player fixed-bottom'
            url= ''
            width='100%'
            height='100%'
            controls = {true}
            /> */}
             <video src='videos/solarFix.mp4' autoPlay loop muted> </video>
      </div>
   )
};
export default PlayerComponent;