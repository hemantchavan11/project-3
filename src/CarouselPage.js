import Carousel from 'react-bootstrap/Carousel';
import CI1 from "./CarouselImages/CarouselImg1.jpg";
import CI2 from "./CarouselImages/CarouselImg2.jpg";
import CI3 from "./CarouselImages/CarouselImg3.jpg";

function CarouselPage(){
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img className='Cimg' src={CI1} alt=''/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className='Cimg' src={CI2} alt=''/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className='Cimg' src={CI3} alt=''/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default CarouselPage;