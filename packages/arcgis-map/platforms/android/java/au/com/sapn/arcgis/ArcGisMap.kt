package au.com.sapn.arcgis
import android.widget.FrameLayout
import android.view.View
import com.arcgismaps.ApiKey
import com.arcgismaps.ArcGISEnvironment
import com.arcgismaps.mapping.ArcGISMap
import com.arcgismaps.mapping.BasemapStyle
import com.arcgismaps.mapping.view.MapView
import android.view.ViewGroup.LayoutParams
import com.arcgismaps.mapping.Viewpoint

class ArcGisMap {
    private val _context: android.content.Context

    constructor(context: android.content.Context) {
        this._context = context;
    }

    
    fun createMap(): MapView {
        ArcGISEnvironment.apiKey = ApiKey.create("AAPK0844337409204e97adf6606573bb4065LG2XsG7ErJOEo7kuicBPdesFgnbH7g7eDTxIwQQ_sxv2AJeklp_TEoJl4Uzf3BLL")
        // create and add a map with a navigation night basemap style
        val map = ArcGISMap(BasemapStyle.ArcGISTopographic)
        val initialViewPoint = Viewpoint(latitude = -34.94121, longitude = 138.58109, scale = 72000.0)
        map.initialViewpoint = initialViewPoint
        val mapView = MapView(this._context)

        mapView.minimumHeight = 900
        mapView.minimumWidth = 500
        mapView.map = map
        mapView.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
        //this._context.lifecycle.addObserver(mapView)
        return mapView
    }
}