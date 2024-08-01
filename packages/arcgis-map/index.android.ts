import { ArcgisMapCommon } from './common';

export class ArcgisMap extends ArcgisMapCommon {

    // @ts-ignore
    get android(){
        return this.nativeView;
    }

    initNativeView() {
        const label = new android.widget.TextView(this._context);
        label.setText("ESRI Maps");

        // const label1 = new android.widget.TextView(this._context);
        // label.setText("Text View 2");
        // this.android.addView(label1);
        const frameLayout = new android.widget.FrameLayout(this._context);
        const arcGis = new au.com.sapn.arcgis.ArcGisMap(this._context)
        const lifecycle = this._context.getLifecycle();
        const mapView = arcGis.createMap();
        lifecycle.addObserver(mapView);
        frameLayout.addView(mapView);
        frameLayout.addView(label);
        frameLayout.setMinimumHeight(1800)
        frameLayout.setMinimumWidth(800)
        frameLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT))
        this.android.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT))
        this.android.setMinimumHeight(1500)
        this.android.addView(frameLayout);
        
        
        // com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.create("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
        // const mapView = new com.arcgismaps.mapping.ArcGISMap(com.arcgismaps.mapping.BasemapStyle.ArcGISNavigationNight);
        // this.android.addView(mapView);
        //const mapView = new com.arcgismaps.mapping.ArcGISMap(com.arcgismaps.mapping.BasemapStyle.ArcGISNavigationNight);
        //this.android.addView(mapView);

        //this.nativeView = new android.widget.TextView(this._context);
        // this.android.setText("Test view");

        // this.android.setSingleLine(true);
        //return new au.com.sapn.arcgis.screens.MainScreen(this._context);
    }


}
