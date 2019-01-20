import Axios from 'axios';
import { observable } from "mobx";

interface Item {
  lng: number;
  lat: number;
  type: number;
  isChecked: boolean;
}

export interface IFilter {
  name: string;
  type: number;
  isChecked: boolean;
  icon?: any;
}

class PlaceStore {
  @observable public latLng: { lat: number, lng: number } = { lat: 45.5043877, lng: -73.6150716 };
  @observable public data: Item[] = [];
  @observable public zoom: number = 12;
  @observable public radius: number = this.zoom;


  @observable public filters: IFilter[] = [
    { name: "Vol de véhicule à moteur", type: 0, isChecked: true },
    { name: "Vols qualifiés", type: 1, isChecked: true },
    { name: "Introduction", type: 2, isChecked: true },
    { name: "Méfait", type: 3, isChecked: true },
    { name: "Vol dans / sur véhicule à moteur", type: 4, isChecked: true },
    { name: "Infractions entrainant la mort", type: 5, isChecked: true }
  ];

  public constructor() {
    Axios.defaults.baseURL = 'http://localhost:4000/api/';
  }

  public async load() {
    const serverData = await Axios.get(`crimes/2018`);
    this.data = serverData.data;
    this.data.forEach(x => x.isChecked = true);
  }

  public applyFilter(type: number) {
    const filter = placeStore.filters.find(x => x.type === type);
    if (filter) {
      filter.isChecked = !filter.isChecked;
      this.data.filter(x => x.type === type).forEach(x => {
        x.isChecked = filter.isChecked;
      });
      this.data = this.data.slice();
    }
    console.log(this.data.filter(x => x.isChecked).length)
  }

  public resetMap() {
    this.load();
    this.latLng = { lat: 45.5043877, lng: -73.6150716 };
    this.zoom = 12;
    this.radius = this.zoom;
  }

  public changeLatLng(lat: number, lng: number) {
    this.latLng = { lat, lng }
    const latLng = new google.maps.LatLng(this.latLng.lat, this.latLng.lng);
    this.data = this.data.filter(x => this.isWithinRadius(latLng, x));
    this.zoom = 15;
    this.radius = this.zoom;
  }

  public isWithinRadius(latLngA: google.maps.LatLng, itemLatLngB: Item): boolean {
    return (this.calculateDistance(latLngA.lng(), latLngA.lat(), itemLatLngB.lng, itemLatLngB.lat) < 500);
  }

  public calculateDistance(lng1: number, lat1: number, lng2: number, lat2: number): number {

    const R = 6371e3; // metres
    const radiansLat1 = lat1 * Math.PI / 180.0;
    const radiansLat2 = lat2 * Math.PI / 180.0;
    const deltaLat = (lat2 - lat1) * Math.PI / 180.0;
    const deltaLng = (lng2 - lng1) * Math.PI / 180.0;

    const allo = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(radiansLat1) * Math.cos(radiansLat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const coucou = 2 * Math.atan2(Math.sqrt(allo), Math.sqrt(1 - allo));

    return R * coucou;
  }
}

const placeStore = new PlaceStore();
export default placeStore;