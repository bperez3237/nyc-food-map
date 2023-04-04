import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7, lng: -74.0 },
      zoom: 12
    };
    const map = new window.google.maps.Map(this.mapNode, mapOptions);
    this.setState({ map });
  }

  render() {
    return (
      <div
        style={{ height: '800px', width: '100%' }}
        ref={(mapNode) => { this.mapNode = mapNode; }}
      />
    );
  }
}

export default Map;
