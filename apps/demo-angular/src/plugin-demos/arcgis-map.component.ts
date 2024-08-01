import { Component, NgZone } from '@angular/core';
import { DemoSharedArcgisMap } from '@demo/shared';
import { } from '@csingh1990/arcgis-map';

@Component({
	selector: 'demo-arcgis-map',
	templateUrl: 'arcgis-map.component.html',
})
export class ArcgisMapComponent {
  
  demoShared: DemoSharedArcgisMap;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedArcgisMap();
  }

}