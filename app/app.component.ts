import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  iconData =  {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfbtLVI17rSVs7F9_tm387J__P63msF1BrFDV7jMnkvcaRvV6G&usqp=CAU',
          scaledSize : {
            width: 30,
            height: 30
          }
        }
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  scroll: boolean = false;
  

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    //console.log(this.clickedMarker);
    this.markers[index].visible = false;
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      visible: true,
      opacity: 0.4
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: '',
		  draggable: true,
      visible: false,
      opacity: 0.7,
            icon: this.iconData
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: '',
		  draggable: false,
      visible: true,
      opacity: 0.6,
      icon: this.iconData
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: '',
		  draggable: true,
      visible: true,
      opacity: 0.4,
            icon: this.iconData
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  visible: boolean;
  opacity: number;
        icon?: any;
}



