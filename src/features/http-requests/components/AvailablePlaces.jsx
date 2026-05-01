import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAbaliablePlaces } from "./http.js";
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [avaliablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
      
        const places =await fetchAbaliablePlaces();
        navigator.geolocation.getCurrentPosition((postion) => {
          const sortePlaces = sortPlacesByDistance(
            places,
            postion.coords.latitude,
            postion.coords.longitude,
          );
          setAvailablePlaces(sortePlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch ," });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={avaliablePlaces}
      fallbackText="No places found. Maybe create one?"
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Loading..."
    />
  );
}
