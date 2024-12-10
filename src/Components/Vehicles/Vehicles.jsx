import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import VehiclesCss from "./Vehicles.module.css";
import axios from "axios";
import greenCar from "../../assets/assignment-images/images/card/car1.png";
import whiteCar from "../../assets/assignment-images/images/card/car2.png";
import blueCar from "../../assets/assignment-images/images/card/car3.png";
import arrow from "../../assets/assignment-images/images/card/arrow-right.png";
import freeze from "../../assets/assignment-images/images/card/d8wxke_2_.png";
import door from "../../assets/assignment-images/images/card/doors.png";
import frame from "../../assets/assignment-images/images/card/Frame.png";
import star from "../../assets/assignment-images/images/card/star.png";
import user from "../../assets/assignment-images/images/card/user.png";
import Pagination from "../Pagination/Pagination";
export default function Vehicles() {
  const [cars, setCars] = useState([]);
  const [currentPge, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postPerPage, setPostPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const getCars = async () => {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars/");
      console.log(response.data);
      setCars(response?.data?.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const lastPostIndex = currentPge * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = cars.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="container">
      <Nav />
      <div className={VehiclesCss.vehicles}>
        <p className="special-paragraph mx-auto my-4">Popular Rental Deals</p>
        <h1 className="special-heading text-center">
          Most popular cars rental deals
        </h1>
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className={VehiclesCss.cars}>
          {currentPosts
            .filter((car) =>
              car?.car.toLowerCase().includes(search.toLowerCase())
            )
            .map((car) => (
              <div className={VehiclesCss.car} key={car.id}>
                <img
                  className={VehiclesCss.carImg}
                  src={
                    car?.price > "$1000" && car?.price < "$2000"
                      ? blueCar
                      : car?.price > "$2000" && car?.price < "$2500"
                      ? greenCar
                      : car?.price > "3000"
                      ? greenCar
                      : whiteCar
                  }
                  alt=""
                />
                <h4> {car?.car}</h4>
                <div className={VehiclesCss.preview}>
                  <img src={star} alt="" />
                  <span>4.9</span>
                  <span>(2.678 previews)</span>
                </div>
                <div className={VehiclesCss.details}>
                  <div className={VehiclesCss.detail}>
                    <img src={user} alt="" />
                    <span>4 Passengers </span>
                  </div>
                  <div className={VehiclesCss.detail}>
                    <img src={frame} alt="" />
                    <span>auto </span>
                  </div>
                  <div className={VehiclesCss.detail}>
                    <img src={freeze} alt="" />
                    <span>Air conditioning </span>
                  </div>
                  <div className={VehiclesCss.detail}>
                    <img src={door} alt="" />
                    <span>4 doors </span>
                  </div>
                </div>
                <div className={VehiclesCss.price}>
                  <p>price</p>
                  <p>
                    {car?.price} <span>/day</span>
                  </p>
                </div>
                <button className="btn btn-primary">
                  Rent Now <img src={arrow} alt="" />
                </button>
              </div>
            ))}
        </div>

        <Pagination
          totalPosts={cars?.length}
          postsPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPge}
        />
      </div>
    </div>
  );
}
