import React, {useRef, useState, useEffect} from 'react';
import firebase from "firebase/app";
import {auth} from "../../App";
import { useList } from 'react-firebase-hooks/database';


  export function ChatRoom(props){
    const dummy = useRef();
    
    const writemessagesRef = firebase.database().ref('messages');
    const messagesRef = firebase.database().ref('messages').orderByKey();
    //const [snapshots, loading, error] = useList(messagesRef);
    const [snapshotContainer, setsnapshotContainer] = useState([]);
    let newArray = [];
    let [messages, setmessages] = useState([]);
    const [formValue, setFormValue] = useState('');
  
    useEffect(async () => {
      
      messagesRef.on('child_added', (data) => {
          

            var key = data.key;
            var value = data.val();
            // ...
            newArray.push({
              key: key,
              text: data.val().text,
              createdAt: data.val().createdAt,
              uid: data.val().uid,
              photoURL: data.val().photoURL


            });
            setsnapshotContainer(newArray);

            
        
      });

      await dummy.current.scrollIntoView({ behavior: 'smooth' });         
  

        


    //Snapshot on 'value'
    /*
    messagesRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        
        snapshot.forEach((child) => {
          var childKey = child.key;
          var childData = child.val();
          console.log(childData.text); 
          // ...
          newArray.push({
            key: childKey,
            text: childData.text,
            createdAt: childData.createdAt,
            uid: childData.uid,
            photoURL: childData.photoURL


          });
          
          
        });
        setsnapshotContainer(newArray);
        dummy.current.scrollIntoView({ behavior: 'smooth' });

      } else {
        console.log("No data available");
      }
      
    });
    */
      

    },[]);
    
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
      let newMessageRef = writemessagesRef.push();
      await newMessageRef.set({
        text: formValue,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        uid,
        photoURL
      })

      await setFormValue('');
      await dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    {/*
      React.useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [error]);
  */}
  
  function ChatMessage(props){
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img className ="profilepic" src={photoURL || '../icons/profilepic-min.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
  
  
    return (
      <div className="chatbonegrid">
        <main>
        {/*error && <strong>Error: {error}</strong>*/}
        {/*loading && <span>List: Loading...</span>*/}
        {snapshotContainer && (
          
            <span>

              {snapshotContainer.map((v) => (

                <ChatMessage key={v.key} message={v}/>
              ))}
            </span>
          
        )}

          <span ref={dummy}></span>
  
        </main>
  
        <div className="inputbox">
          <form className="chatform" onSubmit={sendMessage}>
  
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" /*onFocus={props.addmargin} onBlur={props.addmargin}*/ />
  
            <button type="submit" disabled={!formValue}>🕊️</button>
  
          </form>
        </div>
      </div>
    )
  }