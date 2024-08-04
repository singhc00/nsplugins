import { ArcgisMapCommon } from './common';
import { Screen } from '@nativescript/core';
export class ArcgisMap extends ArcgisMapCommon {
    private map: com.arcgismaps.mapping.ArcGISMap;
    private mapView: com.arcgismaps.mapping.view.MapView;
    private graphicsOverlay: com.arcgismaps.mapping.view.GraphicsOverlay;
    private arcgisExtension: au.com.sapn.arcgis.ArcGisMap;
    // @ts-ignore
    get android(){
        return this.nativeView;
    }

    
    initNativeView() {
        try {
            
            const mapLayout = this.createMap();
            this._addOrderPoints();
            
            this.android.addView(mapLayout);
        } catch(e) {
            alert(e.message);
        }

        return;
        try {

        
        const label = new android.widget.TextView(this._context);
        label.setText("ESRI Maps");

        // const label1 = new android.widget.TextView(this._context);
        // label.setText("Text View 2");
        // this.android.addView(label1);
        const frameLayout = new android.widget.FrameLayout(this._context);
        //const arcGis = new au.com.sapn.arcgis.ArcGisMap(this._context)
        //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion["create-y3sK56w"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
        //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion["create-y3sK56w"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
        //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion.create("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
        //com.arcgismaps.ArcGISEnvironment["setApiKey-lGpodAQ"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
        //com.arcgismaps.ArcGISEnvironment.setApiKey("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
        com.arcgismaps.ArcGISEnvironment.INSTANCE["setApiKey-lGpodAQ"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
        const map = new com.arcgismaps.mapping.ArcGISMap(com.arcgismaps.mapping.BasemapStyle.ArcGISTopographic.INSTANCE);
        
        const initialViewPoint = new com.arcgismaps.mapping.Viewpoint(-34.94121, 138.58109, 72000.0, null);
        map.setInitialViewpoint(initialViewPoint);
            //const initialViewPoint = new com.arcgismaps.mapping.Viewpoint(-34.94121, 138.58109, 72000.0)
        const mapView = new com.arcgismaps.mapping.view.MapView(this._context);
        mapView.setMap(map);
    
        //frameLayout.addView(mapView)
       
        const lifecycle = this._context.getLifecycle();
        
        lifecycle.addObserver(mapView);
       // mapView.setMinimumHeight(1500);
        //mapView.setHeight(1550)

        //frameLayout.addView(mapView);
        frameLayout.addView(label);
        frameLayout.setMinimumHeight(Screen.mainScreen.heightPixels)
        frameLayout.setMinimumWidth(Screen.mainScreen.heightPixels)
       // frameLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT))
       // this.android.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT))
       // this.android.setMinimumHeight(1500);

        this.android.addView(frameLayout);
        } catch(e) {
            alert(e.message);
        }
        
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
    
    
    androidContext() {
        return this._context;
    }


    createMap() {
            
        try {

    
            const label = new android.widget.TextView(this.androidContext());
            label.setText("ESRI Maps");
    
            // const label1 = new android.widget.TextView(this._context);
            // label.setText("Text View 2");
            // this.android.addView(label1);
            const frameLayout = new android.widget.FrameLayout(this.androidContext());
            //const arcGis = new au.com.sapn.arcgis.ArcGisMap(this._context)
            //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion["create-y3sK56w"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
            //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion["create-y3sK56w"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
            //com.arcgismaps.ArcGISEnvironment.apiKey = com.arcgismaps.ApiKey.Companion.create("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL");
            //com.arcgismaps.ArcGISEnvironment["setApiKey-lGpodAQ"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
            //com.arcgismaps.ArcGISEnvironment.setApiKey("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
            com.arcgismaps.ArcGISEnvironment.INSTANCE["setApiKey-lGpodAQ"]("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
            this.map = new com.arcgismaps.mapping.ArcGISMap(com.arcgismaps.mapping.BasemapStyle.ArcGISTopographic.INSTANCE);
            
            const initialViewPoint = new com.arcgismaps.mapping.Viewpoint(-34.931300004484065, 138.6426785237267, 72000.0, null);
            this.map.setInitialViewpoint(initialViewPoint);
                //const initialViewPoint = new com.arcgismaps.mapping.Viewpoint(-34.94121, 138.58109, 72000.0)
            this.mapView = new com.arcgismaps.mapping.view.MapView(this.androidContext());
            this.mapView.setMap(this.map);
        
            
           
            const lifecycle = this.androidContext().getLifecycle();
            
            lifecycle.addObserver(this.mapView);
            // @ts-ignore
            frameLayout.addView(this.mapView)
            frameLayout.addView(label);
            frameLayout.setMinimumHeight(Screen.mainScreen.heightPixels)
            frameLayout.setMinimumWidth(Screen.mainScreen.heightPixels)
            
            this._initiateEvents();
    
                return frameLayout;
            } catch(e) {
                alert(e.message);
            }

            
    }

    private _initiateEvents() {
        const _this = this;
        @NativeClass
        class ArcGisExtension extends au.com.sapn.arcgis.ArcGisMap {
            constructor(context) {
                super(context);
            
                // necessary when extending TypeScript constructors
                return global.__native(this)
              }

            onSingleTapConfirmed(event) {
                _this._handleMapTap(event);
            }
        }

        const arcgisExtension = new ArcGisExtension(this.androidContext());
        const lifecycle = this.androidContext().getLifecycle();
        arcgisExtension.initiateEvents(this.mapView, lifecycle);

    }

    private _addOrderPoints() {
        
        this._addGraphicsOverlay();
       
        try {
            const points = [
                {
                  type: "point",
                  longitude: 138.62232002545724,
                  latitude: -35.0459875724086,
                  attributes: {
                    OrderNumber: "10032564",
                    Description: "Stobie Pole down",
                  },
                },
                {
                  type: "point",
                  longitude: 138.60864,
                  latitude: -35.042099,
                  attributes: {
                    OrderNumber: 100345111,
                    Description: "Transformer damaged",
                  },
                },
                {
                  type: "point",
                  longitude: 138.60963268949928,
                  latitude: -35.04388314436227,
                  attributes: {
                    OrderNumber: 100385214,
                    Description: "Powerline damaged",
                  },
                },
                {
                  type: "point",
                  longitude: 138.6114911884523,
                  latitude: -35.04375019098281,
                  attributes: {
                    OrderNumber: 100352144,
                    Description: "Electric Shock",
                  },
                },
                {
                  type: "point",
                  longitude: 138.6426785237267,
                  latitude: -34.931300004484065,
                  attributes: {
                    OrderNumber: "100352144",
                    Description: "Electric Shock",
                  },
                },
              ];
            for(const point of points) {
                this._addPoint(point.longitude, point.latitude, point.attributes);
            }
            this._addPoint(-34.931300004484065, 138.6426785237267, {OrderNumber: 1234567});
            //this._addPoint(-118.80657463861, 34.0005930608889);
            //-118.80657463861, 34.0005930608889
        } catch(e) {
            alert(e.message);
        }
        
    }

    _handleMapTap(event) {
        try {
            if(!event) {
                return;
            }
            const attribute = event.getMapPoint().getM();
            alert(attribute)
        } catch(e) {
            alert(e.message);
        }
    }

    _openBottomSheet() {
        
    }

    _addPoint(latitude, longitude, attributes) {
            
            const attribute = new java.lang.Double(123455.5);
            // @ts-ignore
            const point = new com.arcgismaps.geometry.Point(latitude, longitude, null, attribute,  com.arcgismaps.geometry.SpatialReference.Companion.wgs84());
            const markerSymbol = new com.arcgismaps.internal.jni.CoreSimpleMarkerSymbol()
            const simpleMarkerSymbol = new com.arcgismaps.mapping.symbology.SimpleMarkerSymbol(markerSymbol, true);
            simpleMarkerSymbol.setStyle(com.arcgismaps.mapping.symbology.SimpleMarkerSymbolStyle.Circle.INSTANCE);
            simpleMarkerSymbol["setColor-iGKdAYA"](	android.graphics.Color.BLUE);
            simpleMarkerSymbol.setSize(25);
            const pointGraphic = new com.arcgismaps.mapping.view.Graphic(point, simpleMarkerSymbol);
            this.graphicsOverlay.getGraphics().add(pointGraphic);
    }
    
    _addGraphicsOverlay() {
        try {
            const emptyList :java.lang.Iterable<com.arcgismaps.mapping.view.Graphic> = java.util.Collections.emptyList();
            //const graphicsArray = Array.create(com.arcgismaps.mapping.view.Graphic, 0);
            //const emptyGraphics = java.util.Collections.<com.arcgismaps.mapping.view.Graphic>emptyList();
            this.graphicsOverlay = new com.arcgismaps.mapping.view.GraphicsOverlay(emptyList, com.arcgismaps.mapping.view.GraphicsRenderingMode.Dynamic.INSTANCE);
            //this.mapView.setGraphicsOverlays(graphicsOverlay)
            this.mapView.getGraphicsOverlays().add(this.graphicsOverlay);
            
        } catch(e) {
            alert(e.message);
        }
    }

    
}
