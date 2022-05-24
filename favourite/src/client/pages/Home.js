import _ from "lodash";
import React, {Component, PropTypes} from "react";
import render from "react-dom";

export class GoogleMaps extends Component{
    constructor(props){
        super(props);
        this.state = ""
    };
    static propTypes = {
        config: PropTypes.object.isRequired,
    };
    static defaultProps = {
        config: {},
    };
    componentDidMount() {
        this.map = this._createMap();
        this.marker = this._createmarkers();
    };
    _createMap = () => {
        const { mapCanvas } = this.props;
        const { config } = this.props;

        if (config.type === 'street'){
            return new GoogleMaps.maps.StreetViewPanorama(mapCanvas, config.mapOptions);
        }
        return new GoogleMaps.maps.Map(mapCanvas, config.mapOptions);
    };
    _createMarkers = () => {
        const {config} = this.props;
        const { _createInfoWindow } = this;
        if(config.allowClusters){
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-undef
    } else {
        _.forEach(config.locations, location => {
            const marker = new GoogleMaps.maps.Marker({
                position: location,
                map: this.map,
                title: location.infoWindowContent.title || ''
            });
            _createInfoWindow(marker, location);
        });
    }
    };
    _createInfoWindow = (marker, location) => {
        const { title, text, imgUrl} = location.infoWindowContent;
        const infoWindowTemplate = `<div class = "info-window"
        style = "background-image: url(${imgUrl})"}>
        <h4> ${title}</h4>
        <p> ${text}</p>
        </div>`;
        const infoWindow = new GoogleMaps.maps.InfoWindow({
            content: infoWindowTemplate
        });
        marker.addListener('click', function() {
            infoWindow.open(this.map, marker);
        });
    };
    render () {
        return (
            <div className = "google-map" ref = "mapCanvas">
                LOADING MAP ...
            </div>
        );
    };

}
const Home = () => {

    const streetViewConfig = {
        type: 'street',
        mapOptions: {
            position: {
                lat: -31.6443212,
                lng: -138.2993317
            },
            pov: {
                heading: 200,
                pitch: 0
            },
            scrollWheel: false
        }
    };
    const mapViewConfig = {
        mapOptions : {
            center: {
                lat: -31.6443212,
                lng: -138.2993317,
            },
            zoom: 13,
            streetViewControl: true,
            scrollWheel: true
        },
        type: 'map',
        allowClusters: false,
        locations: [
            
            {
                lat: -31.6443212,
                lng: -138.2993317,
                infoWindowContent: {
                    title: 'Rawnsley Park Station',
                    text: "Rawnsley Park Station is owned and managed by fourth generation Flinders Ranges’ residents, Tony and Julieanne Smith. The station has been in the Smith family since 1953, and was originally owned by Tony’s father, Clem Smith. Initially devoted to sheep shearing, the station ventured into tourism in 1968, when the first cabins were opened and sheep shearing demonstrations began. ",
                    imgUrl: 'https://goo.gl/maps/k2WQ7SSNapErQ4jV7'

                }

            }
        ]

    };
    return (
        <div className = "page">
            <div className = "flexbox">
                <div className = "map-container u-vr">
                    <GoogleMaps config = { mapViewConfig }/>
                </div>
                <div className = "map-container">
                    <GoogleMaps config = {streetViewConfig }/>
                </div>
            </div>
        </div>
    );
}
render(<Home/>, document.body);

export default GoogleMaps


