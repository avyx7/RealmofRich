import React, {useRef, useState, useEffect} from 'react';
import firebase from "firebase/app";
import {auth} from "../../App";
import { useList } from 'react-firebase-hooks/database';


  export function ChatRoom(){
    const dummy = useRef();
    
    const writemessagesRef = firebase.database().ref('messages');
    const messagesRef = firebase.database().ref('messages').orderByKey();
    const [snapshots, loading, error] = useList(messagesRef);
    
    let [messages, setmessages] = useState([]);
    const [formValue, setFormValue] = useState('');
  
    useEffect(() => {
      /*
      messagesRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
          let newArray = [];
          let mArray = snapshot.val();
          snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            // ...
            newArray.push({
              key: childKey,
              text: mArray[childKey].text,
              createdAt: mArray[childKey].createdAt,
              uid: mArray[childKey].uid,
              photoURL: mArray[childKey].photoURL

            });
          });
          setmessages(newArray)
  
        } else {
          console.log("No data available");
        }
      },[messagesRef]);
      */

      dummy.current.scrollIntoView({ behavior: 'smooth' });
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
        <img className ="profilepic" src={photoURL || './1111.jpg'} />
        <p>{text}</p>
      </div>
    </>)
  }
  
    return (
      <div className="chatbonegrid">
        <main>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>List: Loading...</span>}
        {!loading && snapshots && (
          
            <span>
              {snapshots.map((v) => (
                <ChatMessage key={v.key} message={v.val()}/>
              ))}
            </span>
          
        )}

          <span ref={dummy}></span>
  
        </main>
  
        <div className="inputbox">
          <form className="chatform" onSubmit={sendMessage}>
  
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
            <button type="submit" disabled={!formValue}>🕊️</button>
  
          </form>
        </div>
      </div>
    )
  }