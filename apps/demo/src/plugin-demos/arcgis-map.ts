import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedArcgisMap } from '@demo/shared';
import { } from '@csingh1990/arcgis-map';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedArcgisMap {
	
}
