import image1 from "../../assets/1111.JPG";import image2 from "../../assets/2222.JPG";import image3 from "../../assets/3333.JPG";
import image4 from "../../assets/4444.JPG";
import style from '../../assets/educationHome.module.css';

function EducationCarousel() {
    return (
        <div className={style.educationcarousel}>

            <section className={style.carousel}>
            <ol className={style.carousel__viewport}>
                <li className={style.carousel__slide}>
                <img className={style.caraouselimage} src={image1}></img>
                <div class={style.carousel__snapper}></div>
                </li>
                <li className={style.carousel__slide}>
                <img className={style.caraouselimage} src={image2}></img> 
                <div className={style.carousel__snapper}></div>
                </li>
                <li className={style.carousel__slide}>
                <img className={style.caraouselimage} src={image3}></img>
                <div className={style.carousel__snapper}></div>
                </li>
                <li className={style.carousel__slide}>
                <img className={style.caraouselimage} src={image4}></img>
                <div className={style.carousel__snapper}></div>
                </li>
            </ol>
            
            </section>
        </div>


        );
    }
    
    export default EducationCarousel;