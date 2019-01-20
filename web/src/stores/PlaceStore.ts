import { observable } from "mobx";

class PlaceStore {
  @observable public latitude: number;
  @observable public longitude: number;

  public changeLatLng(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng
  }
}

const placeStore = new PlaceStore();
export default placeStore;