import React, { useEffect, useState } from "react";

const Tempapp = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ecb1b26df11a554d4b6d6c2d85962e20`;
      const response = await fetch(url);
      const reJson = await response.json();
      console.log(reJson);

      setcity(reJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp"> {city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
