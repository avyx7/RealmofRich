
function EducationCarousel() {
    return (
        <div className="educationcarousel">

            <section className="carousel">
            <ol className="carousel__viewport">
                <li className="carousel__slide">
                <img className="caraouselimage" src="../educationimages/1111.jpg"></img>
                <div class="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src="../educationimages/2222.JPG"></img> 
                <div className="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src="../educationimages/3333.jpg"></img>
                <div className="carousel__snapper"></div>
                </li>
                <li className="carousel__slide">
                <img className="caraouselimage" src="../educationimages/4444.JPG"></img>
                <div className="carousel__snapper"></div>
                </li>
            </ol>
            
            </section>
        </div>


        );
    }
    
    export default EducationCarousel;