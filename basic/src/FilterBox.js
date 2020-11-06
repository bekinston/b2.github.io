import React from 'react'
import red from './logos/red.png'
import blue from './logos/blue.png'
import green from './logos/green.png'


class FilterBox extends React.Component{

  constructor(props){


    super(props);
    console.log(this.props.data);

  }



  render(){
    const layers_id = [];
    if(this.props.map_ready){
      this.props.data.features.forEach((feature)=>{

        const symbol = feature.properties['icon'];
        const name = feature.name;
        const company = feature.properties.category;
        const layerID = 'poi_'+ name + company;
        if(!this.props.map.getLayer()){
          this.props.map.addLayer({
            'id':layerID,
            'type': 'symbol',
            'source': 'places',
            'layout': {
              "icon-allow-overlap": true,
              "icon-ignore-placement": false,
              'icon-size': 1.4,
              'icon-image': symbol,
              'text-field': ['get', 'name'],
              'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
              'text-radial-offset': 0.5,
              "text-size": 12,
              'text-font': ["DIN Pro Medium"],
              'text-justify': 'auto'
            },
            paint: {
              "text-halo-width": 0.5,
              "text-halo-blur":0.5,
              "text-halo-color":"#000000",
              "text-color": "#ffffff",
              'icon-halo-width':1,
              'icon-halo-color':"rgba(255,255,255,0)",
            },
            'filter':['all',['==','title',name],['==','category',company]],
          });
          this.props.map.addLayer({
            'id': layerID,
            'type': 'line',
            'source': 'lines',
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': ['get', 'color'],
              'line-width': 3,
              'line-opacity':0.5,

            },
            'filter':['all',['==','title',name],['==','category',company]],
          });

          layers_id.push([layerID, name]);
          console.log(layerID);
          this.props.map.on('mouseenter', layerID, () => {
            this.props.map.getCanvas().style.cursor = 'pointer';
          });

          this.props.map.on('mouseleave', layerID, () => {
            this.props.map.getCanvas().style.cursor = '';
          });
          this.props.map.on('click', layerID, (a) => {
            console.log(a);

            const overlay = document.getElementById('map-overlay');
            const coordinates = a.features[0].geometry.coordinates.slice();
            const description = a.features[0].properties.description;
            const name = a.features[0].properties.name;
            overlay.innerHTML = description;
            console.log(name);
          });
        }
      });
    }


    return (
        <div>
          <div id="map-overlay" className="map-overlay">
            <li>Добро пожаловать на интерактивную карту KAZAKHMYS</li>
          </div>
          <div id="legend" className="legend">
            <ul><a>Условные обозначения ЛЭП</a></ul>

            <ul><img src={red} width={40} height={12} /><a>       ВЛ-220кВ</a></ul>
            <ul><img src={green} width={40} height={12} /><a>       ВЛ-110кВ</a></ul>
            <ul><img src={blue} width={40} height={12} /><a>       ВЛ-35кВ</a></ul>
          </div>
        </div>
    );


  }

}

export default FilterBox;
