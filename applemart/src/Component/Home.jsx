
import React from "react"

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12/lifestyle/-1024w2/gsmarena_004.jpg" class="d-block w-100" alt="Iphone" height="700px" />

                    </div>
                    <div class="carousel-item">
                        <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-4.jpg" class="d-block w-100" alt="Iphone" height="700px" />
                    </div>

                    <div class="carousel-item">
                        <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg" class="d-block w-100" alt="Iphone" height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12/lifestyle/-1024w2/gsmarena_020.jpg" class="d-block w-100" alt="Iphone" height="700px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Home;