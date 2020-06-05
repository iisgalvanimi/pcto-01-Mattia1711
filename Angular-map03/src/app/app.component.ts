import { Component, OnInit } from '@angular/core';
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';
import { Marker } from './models/marker.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ci_vettore } from './models/ci_vettore.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ang-maps';
  // google maps zoom level
  zoom: number = 16;
  geoJsonObject: GeoFeatureCollection; //Oggetto che conterrà il vettore di GeoJson
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  //markers: Marker[]=[];  //Vettore con tutti i marker

  lng: number = 9.191158;
  lat: number = 45.506521;

  constructor() {
    //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file gojson.model.ts
    this.geoJsonObject = GEOJSON;
    console.log(this.geoJsonObject); //stampo l'oggetto geoJsonObject sulla console
    //Provo a visualizzare le coordinate della prima features
    //console.log(?????);
  }


  styleFunc = (feature) => {
    console.log(feature.i.id)
    let newColor = "#FF0000"; //RED
    if (feature.i.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
      clickable: false,
      fillColor: newColor,
      strokeWeight: 1
    });
  }
    obsCiVett : Observable<Ci_vettore[]>; //Crea un observable per ricevere i vettori energetici
    markers : Marker[] //Marker va importato

 prepareCiVettData = (data: Ci_vettore[]) =>
  {
    console.log(data); //Verifica di ricevere i vettori energetici
    this.markers = []; //NB: markers va dichiarata tra le proprietà markers : Marker[]
    for (const iterator of data) { //Per ogni oggetto del vettore crea un Marker
     let m = new Marker(iterator.WGS84_X,iterator.WGS84_Y,iterator.CI_VETTORE);
      this.markers.push(m);

    }
 }



  ngOnInit() {

    for (let f of this.geoJsonObject.features) {
      // f ==  this.geoJsonObject.features[0]

      let m = {
        lng: f.geometry.coordinates[0][0][0],
        lat: f.geometry.coordinates[0][0][1],
        label: String(f.properties.id)
      }



  }
}



  }
