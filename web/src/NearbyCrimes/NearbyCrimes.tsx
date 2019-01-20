export class NearbyCrimes {

    public getNerbyCrimesCount(searchedLatLng: any, data: any[]): number {
        return data.filter(x => this.isWithinRadius(searchedLatLng, x)).length;
    }

    public isWithinRadius(latLngA: google.maps.LatLng, latLngB: google.maps.LatLng): boolean {
        return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) < 100);
    }
}