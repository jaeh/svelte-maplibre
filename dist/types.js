import {} from 'maplibre-gl';
import MapLibre from 'maplibre-gl';
const { LngLatBounds, LngLat } = MapLibre;
function compareFloat(a, b) {
  return Math.abs(a - b) < 0.000001;
}
export function boundsEqual(param, mapBounds) {
  let paramBounds = LngLatBounds.convert(param);
  if (!mapBounds) {
    return { equal: false, bounds: paramBounds };
  }
  let abNe = paramBounds.getNorthEast();
  let bbNe = mapBounds.getNorthEast();
  if (!compareFloat(abNe.lat, bbNe.lat) || !compareFloat(abNe.wrap().lng, bbNe.wrap().lng)) {
    return { equal: false, bounds: paramBounds };
  }
  let abSw = paramBounds.getSouthWest();
  let bbSw = mapBounds.getSouthWest();
  if (!compareFloat(abSw.lat, bbSw.lat) || !compareFloat(abSw.wrap().lng, bbSw.wrap().lng)) {
    return { equal: false, bounds: paramBounds };
  }
  return { equal: true, bounds: paramBounds };
}
export function convertBoundsToUserFormat(bounds, param) {
  const sw = bounds.getSouthWest();
  const ne = bounds.getNorthEast();
  if (Array.isArray(param)) {
    if (param.length === 4) {
      // Flat array of numbers
      return [sw.lng, sw.lat, ne.lng, ne.lat];
    } else if (param.length === 2) {
      if (param[0] instanceof LngLat) {
        // Array of LngLat objects
        return [sw, ne];
      } else {
        // Nested array of numbers
        return [
          [sw.lng, sw.lat],
          [ne.lng, ne.lat],
        ];
      }
    }
  }
  // param is not set, or it's a LngLatBounds
  return bounds;
}
