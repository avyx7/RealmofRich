import React, { useEffect } from 'react';
import { firestore } from '../App';

export default function Firestoredb() {
  return (
    <div></div>
  )
}

export function createdata(props){
  const ref = props.ref;

}

export function readdata(props){
  const ref = props.ref;

}

export function updatedata(props){
  const ref = props.ref;

}

export function deletedata(props){
  const ref = props.ref;

}

//Listner
export var unsubscribe;
export function listenData(location){
    const ref = location;
     unsubscribe = ref.onSnapshot((doc) => {
      // Respond to data
      doc.data();
    });

    // Later ...

  }



/*
  useEffect(() => {
    const ref = location;
    const unsubscribe = ref
    .onSnapshot((doc) => {
      // Respond to data
      doc.data()
    });

    // Later ...
    return function cleanup(){
    // Stop listening to changes
    unsubscribe();
    }
  });

  
  
export const unsubscribe = (location) => {
  const ref = location;
  const unsubscribe = ref
  .onSnapshot((doc) => {
    // Respond to data
    doc.data()
  });

// Later ...

// Stop listening to changes
unsubscribe();
}
*/

