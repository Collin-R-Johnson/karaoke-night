/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react'
import NavBar from '../NavBar.react'
import SongSearch from '../SongSearch.react'
import micIllo from '../../../img/mic-illustration.svg'

export default class HomePage extends Component {
  render() {
    return (
      <div className="center py3 mt4 mb4">
        <div style={{marginBottom: '-5px'}} className="h5 white">Every night is</div>
        <h1 className="mt0 extra-bold caps z2 relative white" style={{letterSpacing: '-1px', marginBottom: '-20px'}}>
          Karaoke Night
        </h1>
        <img src={micIllo} className="mx-auto z1" />
        <div className="mt2 px3"><SongSearch /></div>
        <div className="center py2">or <a href="#">browse songbooks</a></div>
        <NavBar activeTab="songs"/>
      </div>
    )
  }
}
