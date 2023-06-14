import React from "react"
import { NavLink } from "react-router-dom"
const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolore numquam perferendis facilis tenetur inventore quasi iste? Culpa officiis molestias aut eveniet tempora sunt dolorum minima, corporis illum autem explicabo quos quia totam voluptas laudantium at iusto neque quibusdam quidem dolores quae vero maiores labore. Ducimus asperiores harum, amet sunt molestiae nisi voluptates, quis atque esse ab aut? Ipsa laboriosam provident eaque dolorum reiciendis corrupti non fugiat. Nesciunt iure veritatis culpa ipsa? Vero excepturi, cumque amet accusantium alias repellat reiciendis perspiciatis quod a doloremque rerum inventore! Quaerat laboriosam facere eum sed laudantium deleniti, illum eaque beatae quis suscipit quos ipsam.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md d-flex justify-content-center">
                        <img src="https://img.freepik.com/premium-vector/customer-service-flat-illustration-concept-white-background_701961-2137.jpg?w=2000" alt="About Us" height="500px" width="600px"  />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;