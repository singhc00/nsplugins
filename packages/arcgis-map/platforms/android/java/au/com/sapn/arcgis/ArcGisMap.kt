package au.com.sapn.arcgis
import android.util.Log
import android.widget.FrameLayout
import android.view.View
import com.arcgismaps.ApiKey
import com.arcgismaps.ArcGISEnvironment
import com.arcgismaps.mapping.ArcGISMap
import com.arcgismaps.mapping.BasemapStyle
import com.arcgismaps.mapping.view.MapView
import android.view.ViewGroup.LayoutParams
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.coroutineScope
import androidx.lifecycle.lifecycleScope
import com.arcgismaps.Color
import com.arcgismaps.geometry.Point
import com.arcgismaps.geometry.SpatialReference
import com.arcgismaps.mapping.Viewpoint
import com.arcgismaps.mapping.symbology.SimpleMarkerSymbol
import com.arcgismaps.mapping.symbology.SimpleMarkerSymbolStyle
import com.arcgismaps.mapping.view.Graphic
import com.arcgismaps.mapping.view.GraphicsOverlay
import com.arcgismaps.mapping.view.SingleTapConfirmedEvent
import kotlinx.coroutines.launch


open class ArcGisMap {
    private val _context: android.content.Context
    constructor(context: android.content.Context) {
        this._context = context;
    }

    fun createMap(apiKey: String):ArcGISMap {
        var apiKeyLocal = apiKey;

        if(apiKeyLocal == null || apiKeyLocal == "") {
            apiKeyLocal = "AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL";
        }

        ArcGISEnvironment.apiKey = ApiKey.create(apiKeyLocal)

        // create and add a map with a navigation night basemap style
        val map = ArcGISMap(BasemapStyle.ArcGISTopographic)
        val initialViewPoint = Viewpoint(latitude = -34.94121, longitude = 138.58109, scale = 72000.0)
        map.initialViewpoint = initialViewPoint

        return map
    }

    fun createMapView(map: ArcGISMap, lifecycle: Lifecycle): MapView {
        val mapView = MapView(this._context)

        mapView.minimumHeight = 300
        mapView.minimumWidth = 100
        mapView.map = map
        mapView.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
        this.initiateEvents(mapView, lifecycle)
        //this._context.lifecycle.addObserver(mapView)
        return mapView
    }


    fun addGraphicsOverlay(mapView: MapView): GraphicsOverlay {
        val graphicsOverlay = GraphicsOverlay()
        mapView.graphicsOverlays.add(graphicsOverlay)
        return graphicsOverlay

    }

    fun addPoint(latitude: Double, longitude: Double, graphicsOverlay: GraphicsOverlay) {
        val point = Point(x = longitude, y = latitude, spatialReference = SpatialReference.wgs84())
        val simpleMarker = SimpleMarkerSymbol(style = SimpleMarkerSymbolStyle.Circle, color = Color.red, size = 15.0f)
        val pointGraphic = Graphic(geometry = point, symbol = simpleMarker)
        graphicsOverlay.graphics.add(pointGraphic)
    }


    open fun onSingleTapConfirmed(event: SingleTapConfirmedEvent) {
        Log.v("Map", "Screen Tap")
    }

    /**
     * This method can be overridden
     */
    open fun initiateEvents(mapView: MapView, lifecycle: Lifecycle) {
        val lifecycleScope: LifecycleCoroutineScope = lifecycle.coroutineScope
        lifecycleScope.launch {
            //arcgis.onSingleTapConfirmed(mapView)
            mapView.onSingleTapConfirmed.collect { event ->
                onSingleTapConfirmed(event)
            }
        }
    }

}