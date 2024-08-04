declare module au {
    export module com {
        export module sapn {
            export module arcgis {
                export class ArcGisMap {
                    public static class: java.lang.Class<au.com.sapn.arcgis.ArcGisMap>;
                    public constructor(param0: android.content.Context);
                    public createMap();
                    public initiateEvents(param0: com.arcgismaps.mapping.view.MapView, param1: androidx.lifecycle.Lifecycle);
                    public onSingleTapConfirmed(param0: com.arcgismaps.mapping.view.SingleTapConfirmedEvent);
                }
            }
        }
    }
}