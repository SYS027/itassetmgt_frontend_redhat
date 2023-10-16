import React, { useEffect, useState } from "react";

const LocationDataFetching = ({ setCountries, setStates, setCities }) => {
  useEffect(() => {
    const CountryData = async () => {
      try {
        const response = await fetch("https://itassetmgt-7659d44ac774.herokuapp.com/api/v1/countries");
        const data = await response.json();
        setCountries(data);
      } catch (error) {}
    };

    const StateData = async () => {
      try {
        const response = await fetch("https://itassetmgt-7659d44ac774.herokuapp.com/api/v1/states");
        const data = await response.json();
        setStates(data);
      } catch (error) {}
    };

    const CityData = async () => {
      try {
        const response = await fetch("https://itassetmgt-7659d44ac774.herokuapp.com/api/v1/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {}
    };

    CountryData();
    StateData();
    CityData();
  }, [setCountries, setStates, setCities]);

  return null; 
};

export default LocationDataFetching;
