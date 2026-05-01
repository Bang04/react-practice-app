import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hook/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude,
      );

      resolve(sortedPlaces);
    },
    (error)=> {
       if (error.code === 1) {
          // 권한 거부
          reject({
            message: "위치 권한이 거부되었습니다. 브라우저 설정에서 허용해주세요.",
          });
        } else if (error.code === 2) {
          reject({
            message: "위치 정보를 가져올 수 없습니다.",
          });
        } else if (error.code === 3) {
          reject({
            message: "위치 요청 시간이 초과되었습니다.",
          });
        } else {
          reject({
            message: "위치 정보를 가져오는 중 오류가 발생했습니다.",
          });
        }
    }
  );
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error,
    fetchedData : avaliablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={avaliablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
