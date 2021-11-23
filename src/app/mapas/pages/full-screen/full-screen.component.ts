import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa{
      width:100%;
      height: 100%;
    }
  `]
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-110.98053800690543, 29.162520703410234],
      zoom: 14
    });

  }

}
