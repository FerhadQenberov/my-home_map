import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useCityFetchQuery } from "../../manager/api/apiSlice";
import {
  allSetlat,
  allSetlng,
  cityLat,
  cityLng,
  districtLat,
  districtLng,
  selectAllCity,
} from "../../manager/features/formSlice";
import { useSelector } from "react-redux";

export const Map = () => {
  // city kordinatlari selected
  const citylat = useSelector(cityLat);
  const citylng = useSelector(cityLng);

  // district kordinatlari selected
  const regionLat = useSelector(districtLat);
  const regionLng = useSelector(districtLng);

 

  const settlementLat = useSelector(allSetlat);
  const settlementLng = useSelector(allSetlng);

 

  const [lat, setLat] = useState(40.405999043422824);
  const [lng, setLng] = useState(49.91863556236839);
  const { data, isSuccess } = useCityFetchQuery();
  const cityId = useSelector(selectAllCity);

  const [marker, setMarker] = useState(null);

  function handleLat(latKordinat) {
    // setLat(latKordinat);
  
  }

  function handleLng(lngKordinat) {
    // setLng(lngKordinat);
   
  }

  useEffect(() => {
    const parsedLat = parseFloat(citylat);
    const parsedLng = parseFloat(citylng);

    if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
      setLat(parsedLat);
      setLng(parsedLng);
    }
  }, [cityId, data, isSuccess]);

  useEffect(() => {
    const parsedLat = parseFloat(regionLat);
    const parsedLng = parseFloat(regionLng);

    if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
      setLat(parsedLat);
      setLng(parsedLng);
    }
  }, [regionLng, regionLat]);
  useEffect(() => {
    const parsedLat = parseFloat(settlementLat);
    const parsedLng = parseFloat(settlementLng);

    if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
      setLat(parsedLat);
      setLng(parsedLng);
    }
  }, [settlementLat, settlementLng]);

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 13,
    draggable: true,
  };
  useEffect(() => {
    if (marker) {
      marker.setPosition({ lat, lng });
    }
  }, [lat, lng, marker]);

  const loadMap = (map, maps) => {
    if (!marker) {
      const newMarker = new maps.Marker({
        position: {
          lat: defaultProps.center.lat,
          lng: defaultProps.center.lng,
        },
        map,
        draggable: true,
      });
      newMarker.addListener("dragend", handleDragEnd);
      setMarker(newMarker);
    }
  };

  const handleDragEnd = (e) => {
    handleLat(e.latLng.lat());
    handleLng(e.latLng.lng());
  };

  return (
    <div className="w-full h-[400px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-mUP0enyn48aZflccupdAU4WsGIYEthM" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
        
    </div>
  );
};
