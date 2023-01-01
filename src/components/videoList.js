import React from 'react';
import style from '../assets/videoList.module.css';


function VideoList() {
  
let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("b053bbc46d1124aea130f2aecbee0d8adc059475", "b9Y/D/68tRAgMslB3Os+LFD62SsmKC5nnsnT9l9/Q1kUoLF/fG2JuXDcIRrQ2+8vmmNEzHCQUanpNVLWJKvuOAGo8cDCxd0rQvqMyBwslfpjxuGABn5HBQ8lki3/rUb2", "3a8a3ab9c276269749822b9c319c94b9");

client.request({
method: 'GET',
path: '/me/videos'
}, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })

  return (
    <div className={style.videoList}>

    </div>
  );
}


export default VideoList;
