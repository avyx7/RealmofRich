import React from 'react'
import { firestore, database } from './App'; 


  export function ChatRoom(){
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
    useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
  
    });
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      // Create a new post reference with an auto-generated id
      var postListRef = firebase.database().ref('posts');
      var newPostRef = postListRef.push();
      newPostRef.set({
          // ...
      });
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
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
  
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
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