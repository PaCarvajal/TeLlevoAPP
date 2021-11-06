import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServTellevoService } from 'src/app/serv-tellevo.service';
import { GeolocationService } from '@ng-web-apis/geolocation';

declare let google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-comp-llevar',
  templateUrl: './comp-llevar.component.html',
  styleUrls: ['./comp-llevar.component.scss'],
})
export class CompLlevarComponent implements OnInit {
  viaje = {
    id: null,
    viajeId: null,
    hora: '',
    precio: '',
    origen: '',
    destino: '',
  };
  viajes: any;
  cant: any;

  map = null;
  newPosition: {
    lat: any;
    lng: any;
  };

  constructor(
    private api: ServTellevoService,
    public alertController: AlertController,
    private readonly geolocation$: GeolocationService
  ) {
    geolocation$.subscribe((geoPosition) => {
      console.log(geoPosition);

      let mark = {
        lat: geoPosition.coords.latitude,
        lng: geoPosition.coords.longitude,
      };

      this.addMarker(mark);
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getViajes();
    this.loadMap();
  }

  getViajes() {
    this.api.getViajes().subscribe(
      (dato) => {
        this.viajes = dato;
        this.cant = this.viajes.length;

        console.log(this.viajes.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //FUNCIONA!!! necestia al getViajes()
  createViaje() {
    if (this.viaje.hora === undefined) {
      this.presentAlert('Seleccione una hora');
      return;
    }
    if (
      this.viaje.hora !== '' &&
      this.viaje.precio !== '' &&
      this.viaje.origen !== '' &&
      this.viaje.destino !== ''
    ) {
      this.viaje.viajeId = this.cant + 1;
      this.viaje.id = this.cant + 1;
      this.api.createViaje(this.viaje).subscribe(
        () => {
          this.presentAlert('Viaje agendado');
          // this.getViajes();
        },
        (error) => {
          console.log('Error ' + error);
        }
      );
    } else {
      this.presentAlert('Faltan campos por llenar');
    }
  }
  // else{
  //   this.api.updateViaje(this.viaje.viajeId).subscribe(
  //     ()=>{
  //       console.log("Actualizado Correctamente");
  //       // this.getViajes();
  //     },
  //     error=>{
  //       console.log("Error "+error)
  //     }
  //   );
  // }

  //no esta implementada
  limpiar() {
    //así se recorre un Objeto entries y obtengo su clave y valor
    for (let [key, value] of Object.entries(this.viaje)) {
      Object.defineProperty(this.viaje, key, { value: '' });
    }
  }

  // mostrar(){
  //   if (this.viaje.viajeId!=0 && this.viaje.hora!="") {
  //     this.presentAlert("Viaje agendado", this.viaje.hora+"hrs")
  //   }else{
  //     this.presentAlert("Viaje no guardado", "Faltan campos por llenar")
  //   }
  // }

  async presentAlert(titulo: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      buttons: ['OK'],
    });
    await alert.present();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = { lat: -33.04487773980582, lng: -71.43802134098559 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      // disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker) {
    return new google.maps.Marker({
      position: marker,
      map: this.map,
      title: 'Pin 1',
    });
  }
}
