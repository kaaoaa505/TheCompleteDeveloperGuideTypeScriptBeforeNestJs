import { Loader, LoaderOptions } from 'google-maps';
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: string;
  color: string;
}

export class CustomMap {
  googleMap: google.maps.Map<HTMLElement>;

  public async LoadMap(elementId: string, lat0: number, lng0: number) {
    const options: LoaderOptions = {
      /* todo */
    };
    const loader = new Loader(
      'AIzaSyBiPkSGGsczpaPbU0ud39WFTGnKlZxXgjI',
      options
    );

    const google = await loader.load();

    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lat0, lng: lng0 },
      zoom: 1,
    });
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    if (mappable.markerContent != '') {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent,
      });

      marker.addListener('click', () => {
        infoWindow.open(this.googleMap, marker);
      });
    }
  }
}
