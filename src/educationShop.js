import React, { useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { database } from './App';

export default function EducationShop() {
  const shopItems = {
    audiobooks: {
      exammania: {
        itemcode: 'R35DMRIA5SQF55O',
        heading: '90 min Exam prep',
        description: 'Quick tricks to fool the examiner for subjective examinations X board',
        price: 99,
        backgroundimage: ''
      },
      winnermindset: {
        itemcode: 'S76Z7T8OSKVY5K1',
        heading: 'Winner Mindset',
        description: 'Winner mindset can make or break your life',
        price: 499,
        backgroundimage: ''
      },
    },
    hundredsecond: {
      twentyvideo: {
        itemcode: 'PYW4E5VQKLR6E28',
        heading: 'Explained in 100 seconds',
        description: 'Mega bundle of 20 videos from our - Explained in !00 SECONDS',
        price: 1099,
        backgroundimage: ''
      },
      tenvideo: {
        itemcode: 'LA8CQXW00N4OP2X',
        heading: 'Explained in 100 seconds',
        description: 'Mega bundle of 10 videos from our - Explained in !00 SECONDS',
        price: 599,
        backgroundimage: ''
      },
      onevideo: {
        itemcode: 'A1I38EWSQC7YTUY',
        heading: 'Explained in 100 seconds',
        description: 'Explained in !00 SECONDS video - 1 Video',
        price: 90,
        backgroundimage: ''
      },
    },
  }
  const shopItemCategory = ['audiobooks', 'audiobooks', 'hundredsecond', 'hundredsecond', 'hundredsecond'];
  const shopItemCategoryItems = ['exammania', 'winnermindset', 'twentyvideo', 'tenvideo', 'onevideo'];
  let root, value, nextValue, prevValue, index, arrayLength, arrayLen, element;
  let subdiv = [];
    

      arrayLen = shopItemCategory.length;
      
        for (let i = 0; i < arrayLen; i++) {
          //value
          value = shopItemCategory[i];
          //previous value
          if (i !== 0){prevValue = shopItemCategory[i-1]};
          //next value
          if (i !== (arrayLen-1)){
            nextValue = shopItemCategory[i+1];
          }else{
            nextValue = '';
          }
          
          
          let innerelement;
          do{
            innerelement = (innerelement? innerelement : '') + '<div class="educationItemContainer">'+shopItemCategoryItems[i]+'</div>';
            console.log('loop-innerelement: '+innerelement);
            i = i+1;
            console.log('loop-i: '+i);
             //value
            value = shopItemCategory[i];
            console.log('loop-value: '+value);
            //previous value
            if (i !== 0){prevValue = shopItemCategory[i-1]};
            console.log('loop-prevValue: '+prevValue);
            //next value
            if (i !== (arrayLen-1)){
              nextValue = shopItemCategory[i+1];
              console.log('loop-nextValue: '+nextValue);
            }else{
              nextValue = '';
            }
          }
          while (nextValue == value)
          innerelement = (innerelement? innerelement : '') + '<div class="educationItemContainer">'+shopItemCategoryItems[i]+'</div>';
        //global index assigned to i
        index = i; 
        console.log('OutsideLoop-index: '+index);
          element = (element? element : '') + '<div class="educationPara"><div class="educationShopBanner">'+shopItemCategory[i]+'</div><div class="educationItemsGrid">'+
          innerelement
          +'</div></div>';
          console.log('OutsideLoop-element: '+element);
        }
        /*
        element = <div class="educationShopBanner">HELLO</div>;
        console.log(element);
        return {__html: element};
        */
      
    
    
  /*
    function formatdata() {
      arrayLength = shopItemCategory.length;

      for (let i = 0; i < arrayLength; i++) {
        value = shopItemCategory[i];
        if (i !== 0){prevValue = shopItemCategory[i-1]};
        if (i !== (arrayLength-1)){
          nextValue = shopItemCategory[i+1];
        }else{
          nextValue = '';
        }
        i = index;
        return(
              <div className='educationPara'>
                <div className='educationShopBanner'>{shopItemCategory[i]} </div>
                {formatsubdata(i)}
              </div>

          
        )
        
      }
    }

    function formatsubdata(i){
      let content = [];

      do {
       content.push(shopItemCategoryItems[i]);
       value = shopItemCategoryItems[i];
        if (i !== 0){prevValue = shopItemCategory[i-1]};
        if (i !== (arrayLength-1)){
          nextValue = shopItemCategory[i+1];
        }else{
          nextValue = '';
        }
        i = i+1;
        //return(<div className='educationItemContainer'>{shopItemCategoryItems[i]}</div>)
      }
      while (nextValue == value);
      console.log(content);
      index = i;

      /*
      return(
        <>
        {content.forEach(item =>{
          <div className='educationItemContainer'>{item}</div>
        })}
        </>
      );
      
    }
  */ 
 
  useEffect(()=>{
    const htmlid = document.getElementById('educationmodalcontentid');
    console.log(htmlid);
    //htmlid.dangerouslySetInnerHTML = arrayData();
  },[]);
  
  return (
    <div className='educationShopContainer' id= "educationShopContainerid" dangerouslySetInnerHTML={{__html: element}}>


    </div>
  )
}
