import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ArcgisMapComponent } from './arcgis-map.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ArcgisMapComponent }])],
  declarations: [ArcgisMapComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class ArcgisMapModule {}
