import React, {Component} from "react";

import "../styles/layout.scss"

class Assets extends React {
    constructor(props) {
        super(props)
        this.state = {
            assets: props.assets ||[]
        }
    }
    componentsDidMount() {
        const assets = window.__ASSETS__ ? JSON.parse(window.__ASSETS) : [] 
        delete window.__ASSETS__this.setState({assets})
        if (assets.length == 0){
            fetchAssets().then(json => {
                this.setState({assets: json})
            })
        }
    }
    render() { 
        return
    
    }
}