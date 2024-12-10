import { Link } from "react-router";
import HomeCss from "./Home.module.css";
import Nav from "../Nav/Nav";
import car from "../../assets/assignment-images/images/landing-page/car 2 1.png";
import greenCar from "../../assets/assignment-images/images/card/car1.png";
import whiteCar from "../../assets/assignment-images/images/card/car2.png";
import blueCar from "../../assets/assignment-images/images/card/car3.png";
import arrow from "../../assets/assignment-images/images/card/arrow-right.png";
import freeze from "../../assets/assignment-images/images/card/d8wxke_2_.png";
import door from "../../assets/assignment-images/images/card/doors.png";
import frame from "../../assets/assignment-images/images/card/Frame.png";
import star from "../../assets/assignment-images/images/card/star.png";
import user from "../../assets/assignment-images/images/card/user.png";
import locationIcon from "../../assets/assignment-images/images/landing-page/location.png";
import calenderIcon from "../../assets/assignment-images/images/landing-page/calender.png";
import carIcon from "../../assets/assignment-images/images/landing-page/car-icon.png";
import nissan from "../../assets/assignment-images/images/landing-page/nissan.png";
import volvo from "../../assets/assignment-images/images/landing-page/volvo.png";
import jaguar from "../../assets/assignment-images/images/landing-page/jaguar.png";
import audi from "../../assets/assignment-images/images/landing-page/audi.png";
import carImg from "../../assets/assignment-images/images/landing-page/sec-5/Audi 1.png";
import chatIcon from "../../assets/assignment-images/images/landing-page/sec-5/chat.png";
import messageIcon from "../../assets/assignment-images/images/landing-page/sec-5/message.png";
import userIcon from "../../assets/assignment-images/images/landing-page/sec-5/user.png";
import manPhoto from "../../assets/assignment-images/images/landing-page/sec-6/Rectangle 8 (1).png";
import girlPhoto from "../../assets/assignment-images/images/landing-page/sec-6/girl.png";
import android from "../../assets/assignment-images/images/landing-page/andriod.png";
import ios from "../../assets/assignment-images/images/landing-page/ios.png";
import phone from "../../assets/assignment-images/images/landing-page/sec-7/iPhone-14.png";
import Footer from "../Footer/Footer";
export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className={HomeCss.landing}>
          <div className={HomeCss.text}>
            <h1>
              Find , Book And Rent A Car <span>Easily</span>
            </h1>
            <p>
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
          </div>
          <div className={HomeCss.image}>
            <img src={car} alt="" />
          </div>
        </div>
        <div className="input-group my-4">
          <span className="input-group-text">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search By Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className={HomeCss.popularDeals} id="details">
          <p className="special-paragraph mx-auto">Popular Rental Deals</p>
          <h1 className="special-heading text-center">
            Most popular cars rental deals
          </h1>

          <div className={HomeCss.cars}>
            <div className={HomeCss.car}>
              <img className={HomeCss.carImg} src={blueCar} alt="" />
              <h5> Jaguar XE L P250</h5>
              <div className={HomeCss.preview}>
                <img src={star} alt="" />
                <span>4.9</span>
                <span>(2.678 previews)</span>
              </div>
              <div className={HomeCss.details}>
                <div className={HomeCss.detail}>
                  <img src={user} alt="" />
                  <span>4 Passengers </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={frame} alt="" />
                  <span>auto </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={freeze} alt="" />
                  <span>Air conditioning </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={door} alt="" />
                  <span>4 doors </span>
                </div>
              </div>
              <div className={HomeCss.price}>
                <p>price</p>
                <p>
                  $2100 <span>/day</span>
                </p>
              </div>
              <button className="btn btn-primary">
                Rent Now <img src={arrow} alt="" />
              </button>
            </div>
            <div className={HomeCss.car}>
              <img className={HomeCss.carImg} src={whiteCar} alt="" />
              <h5> Audi R8</h5>
              <div className={HomeCss.preview}>
                <img src={star} alt="" />
                <span>4.6</span>
                <span>(2.015 previews)</span>
              </div>
              <div className={HomeCss.details}>
                <div className={HomeCss.detail}>
                  <img src={user} alt="" />
                  <span>2 Passengers </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={frame} alt="" />
                  <span>auto </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={freeze} alt="" />
                  <span>Air conditioning </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={door} alt="" />
                  <span>2 doors </span>
                </div>
              </div>
              <div className={HomeCss.price}>
                <p>price</p>
                <p>
                  $2700 <span>/day</span>
                </p>
              </div>
              <button className="btn btn-primary">
                Rent Now <img src={arrow} alt="" />
              </button>
            </div>
            <div className={HomeCss.car}>
              <img className={HomeCss.carImg} src={greenCar} alt="" />
              <h5> BMW M3</h5>
              <div className={HomeCss.preview}>
                <img src={star} alt="" />
                <span>4.8</span>
                <span>(2.436 previews)</span>
              </div>
              <div className={HomeCss.details}>
                <div className={HomeCss.detail}>
                  <img src={user} alt="" />
                  <span>4 Passengers </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={frame} alt="" />
                  <span>auto </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={freeze} alt="" />
                  <span>Air conditioning </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={door} alt="" />
                  <span>4 doors </span>
                </div>
              </div>
              <div className={HomeCss.price}>
                <p>price</p>
                <p>
                  $2500 <span>/day</span>
                </p>
              </div>
              <button className="btn btn-primary">
                Rent Now <img src={arrow} alt="" />
              </button>
            </div>
            <div className={HomeCss.car}>
              <img className={HomeCss.carImg} src={blueCar} alt="" />
              <h5> Lambourghini Huracan</h5>
              <div className={HomeCss.preview}>
                <img src={star} alt="" />
                <span>4.4</span>
                <span>(2.196 previews)</span>
              </div>
              <div className={HomeCss.details}>
                <div className={HomeCss.detail}>
                  <img src={user} alt="" />
                  <span>4 Passengers </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={frame} alt="" />
                  <span>auto </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={freeze} alt="" />
                  <span>Air conditioning </span>
                </div>
                <div className={HomeCss.detail}>
                  <img src={door} alt="" />
                  <span>4 doors </span>
                </div>
              </div>
              <div className={HomeCss.price}>
                <p>price</p>
                <p>
                  $2350 <span>/day</span>
                </p>
              </div>
              <button className="btn btn-primary">
                Rent Now <img src={arrow} alt="" />
              </button>
            </div>
          </div>
          <button className="btn btn-outline-secondary d-block my-5 mx-auto w-40 py-2 px-5">
            <Link to="/all-vehicles">
              See All Vehicles <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
        <div className={HomeCss.work} id="work">
          <p className="special-paragraph mx-auto">How it works</p>
          <h1 className="special-heading text-center">
            Most popular cars rental deals
          </h1>
          <div className={HomeCss.group}>
            <div className={HomeCss.item}>
              <img src={locationIcon} alt="" />
              <span>Choose location</span>
              <p>Choose your and find your best car</p>
            </div>
            <div className={HomeCss.item}>
              <img src={calenderIcon} alt="" />
              <span>Pick-up date</span>
              <p>Select your pick up date and time to book your car</p>
            </div>
            <div className={HomeCss.item}>
              <img src={carIcon} alt="" />
              <span>Book your car</span>
              <p>Book your car and we will deliver it directly to you</p>
            </div>
          </div>
        </div>
        <div className={HomeCss.carmodules}>
          <img src={jaguar} alt="" />
          <img src={nissan} alt="" />
          <img src={volvo} alt="" />
          <img src={audi} alt="" />
        </div>
        <div className={HomeCss.why} id="why">
          <div className={HomeCss.left}>
            <img src={carImg} alt="" />
          </div>
          <div className={HomeCss.right}>
            <p className="special-paragraph ">Why choose us</p>
            <h4 className="special-heading">
              We offer the best experience with our deals
            </h4>
            <div className={HomeCss.group}>
              <div className={HomeCss.item}>
                <img src={userIcon} alt="" />
                <div className={HomeCss.text}>
                  <span>Best price guaranteed</span>
                  <p>
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>
              <div className={HomeCss.item}>
                <img src={messageIcon} alt="" />
                <div className={HomeCss.text}>
                  <span>24 hour car delivery</span>
                  <p>
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>
              <div className={HomeCss.item}>
                <img src={userIcon} alt="" />
                <div className={HomeCss.text}>
                  <span>Best price guaranteed</span>
                  <p>
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>
              <div className={HomeCss.item}>
                <img src={chatIcon} alt="" />
                <div className={HomeCss.text}>
                  <span>24/7 technical support</span>
                  <p>
                    Have a question? Contact Rentcars support any time when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomeCss.testimonials}>
          <p className="special-paragraph mx-auto">Testimonials</p>
          <h1 className="special-heading text-center">
            Most popular cars rental deals
          </h1>
          <div className={HomeCss.cards}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={manPhoto}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className={`card-title ${HomeCss.rate}`}>5.0 Stars</h5>
                    <div className={HomeCss.stars}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="card-text">
                      “I feel very secure when using caret alls services. Your
                      customer care team is very enthusiastic and the driver is
                      always on time.”
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={girlPhoto}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className={`card-title ${HomeCss.rate}`}>4.8 Start</h5>
                    <div className={HomeCss.stars}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="card-text">
                      “I feel very secure when using caret alls services. Your
                      customer care team is very enthusiastic and the driver is
                      always on time.”
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomeCss.download}>
          <div className={HomeCss.left}>
            <h2 className="special-heading text-start">
              Download Rentcars App for <span>FREE</span>
            </h2>
            <p>For faster, easier booking and exclusive deals.</p>
            <div className={HomeCss.photos}>
              <img src={android} alt="" />
              <img src={ios} alt="" />
            </div>
            <form>
              <input type="text" placeholder=" Name" />
              <input type="text" placeholder=" Phone Number" />
              <input type="email" placeholder=" Email" />
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className={HomeCss.right}>
            <img src={phone} alt="" />
          </div>
        </div>
        <div className={HomeCss.footer}></div>
      </div>
      <Footer />
    </>
  );
}
