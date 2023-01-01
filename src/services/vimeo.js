import React, { useEffect, useState } from 'react'

export default function Vimeo() {

  const clientIdentifier = '69c692abc3ec11fb92f462ed6911ffe005e97970';
  const token = 'ae33eb1fa1b9e62a4cd596be9c4c8f4b';
  const clientsecret = 'wzORyeRcuZv0QEb0R5qIlBrF20qcymDEghWEMQUa0/ZTQjcAnwoA3XaCNuLeHPevgVyQoVqxgI+LalW1CbshgWeP1vOzZ3X5jJ/0w7lPpzdPR9QoSpZRVd8imH+ZYjF0';
  const authorizeUrl = 'https://api.vimeo.com/oauth/authorize';
  const tokenUrl = 'https://api.vimeo.com/oauth/access_token';

  let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo(clientIdentifier, clientsecret, token);
  const[items, setItems] = useState([]);

  useEffect(()=>{

  /*
    fetch(
      "https://api.vimeo.com/users/user169116042/videos", {
        clientIdentifier, clientsecret, token
      })
                  .then((res) => res.json())
                  .then((json) => {
                      console.log(json);
                  })

  */
 if (!items || items.length == 0){
  let result = [];
    client.request({
        method: 'GET',
        path: "/users/user169116042/videos"
        }, function (error, body, status_code, headers) {
          if (error) {
            console.log(error);
          }
          console.log(body);
          for(var i in body.data){
          result.push([body.data[i].embed]);
          }
            setItems(result);
            console.log(result);
            console.log(status_code);
      })

  }
}

  )

  function VideoHtml(){
    console.log(items);
    let element;
    if (items.length > 0){
      items.forEach(
        (value)=>{
          console.log(value.embed.html);
          element = (element? element : '') + <div>{value.embed.html}</div>
        }
        )
    }
  
    
  
    return (<>
    {console.log(element)}
      <div dangerouslySetInnerHTML={{__html: element}}></div>
    </>)
  }
  
  let videoHtml = items.map(function(value){
    return <div>{value.html}</div>
  })
  return (
    
    <div>
      {videoHtml}
    </div>
  )
}
