import image1 from "../../assets/1111.JPG";import image2 from "../../assets/2222.JPG";import image3 from "../../assets/3333.JPG";
import image4 from "../../assets/4444.JPG";
function EducationCarousel() {
    return (
        <div className="educationcarousel">

            <section className="carousel">
            <ol className="carousel__viewport">
                <li className="carousel__slide">
                <img className="caraouselimage" src={image1}></img>
                <div class="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src={image2}></img> 
                <div className="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src={image3}></img>
                <div className="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src={image4}></img>
                <div className="carousel__snapper"></div>
                </li>
            </ol>
            
            </section>
        </div>


        );
    }
    
    export default EducationCarousel;