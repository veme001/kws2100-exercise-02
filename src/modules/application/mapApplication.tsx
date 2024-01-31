import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { useGeographic } from "ol/proj";

import "ol/ol.css";
import "./application.css";

useGeographic();

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({
    center: [11, 59],
    zoom: 10,
  }),
});

export function MapApplication() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  return (
    <>
      <header>
        <h1>Exercise Appliation</h1>
      </header>
      <nav>
        <div>
          <label>
            <input type={"checkbox"} />
            Show kommuner
          </label>
        </div>
      </nav>
      <div ref={mapRef}></div>;
    </>
  );
}
