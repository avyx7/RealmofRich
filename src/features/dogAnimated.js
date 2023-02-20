import style from '../assets/chat.module.css';

function DogAnimated() {
    return (
        <div className={style.puppychatcontainer}>
            {/*<!-- / Peeping puppy -->*/}
            <div class={style.paw}>
            <div class={style.paw_left}>
                <div class={style.paw_left__part}></div>
                <div class={style.paw_left__part}></div>
                <div class={style.paw_left__part}></div>
            </div>
            <div class={style.paw_right}>
                <div class={style.paw_left__part}></div>
                <div class={style.paw_left__part}></div>
                <div class={style.paw_left__part}></div>
            </div>
            </div>
            <div class={style.puppy}>
            <div class={style.puppyhide}>
                
            </div>
            <div class={style.wrap}>
                <div class={style.body}></div>
                <div class={style.tail}></div>
                <div class={style.head}>
                <div class={style.head_eyebrow}>
                    <div class={style.head_eyebrow__left}></div>
                    <div class={style.head_eyebrow__right}></div>
                </div>
                <div class={style.head_ear}>
                    <div class={style.head_ear__left}></div>
                    <div class={style.head_ear__right}></div>
                </div>
                <div class={style.head_earfold}>
                    <div class={style.head_earfold__left}></div>
                    <div class={style.head_earfold__right}></div>
                </div>
                <div class={style.head_eye}>
                    <div class={style.head_eye__left}>
                    <div class={style.iris}></div>
                    <div class={style.pupil}></div>
                    </div>
                    <div class={style.head_eye__right}>
                    <div class={style.iris}></div>
                    <div class={style.pupil}></div>
                    </div>
                </div>
                <div class={style.head_tongue}></div>
                <div class={style.head_nose}></div>
                <div class={style.head_top}></div>
                <div class={style.head_bottom}>
                    <div class={style.head_bottom__left}></div>
                    <div class={style.head_bottom__right}></div>
                </div>
                <div class={style.head_mouth}>
                    <div class={style.head_mouth__left}></div>
                    <div class={style.head_mouth__right}></div>
                    <div class={style.head_mouth__top}></div>
                </div>
                </div>
            </div>
            </div>
            
      
            </div>
    );
}

export default DogAnimated;