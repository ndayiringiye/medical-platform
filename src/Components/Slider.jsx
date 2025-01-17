import { Carousel } from "antd"
const Slider = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        
      };
    return (
        

            <div>
                <Carousel arrows infinite={true} autoplay={true}>
                    <div>
                        <h3 ><img src="src/imges/consultio.png" alt="image"className="h-screen w-full" /></h3>
                    </div>
                    <div>
                        <h3><img src="src/imges/image.png" alt="image" className="h-screen w-full"/></h3>
                    </div>
                    <div>
                        <h3><img src="src/imges/image.png" alt="image" className="h-screen w-full"/></h3>
                    </div>
                    <div>
                        <h3 ><img src="src/imges/image copy.png" alt="image" className="h-screen w-full"/></h3>
                    </div>
                </Carousel>
            </div>
            )
}

            export default Slider