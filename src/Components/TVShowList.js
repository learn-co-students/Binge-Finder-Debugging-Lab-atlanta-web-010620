import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    if (!!this.props.searchTerm){
      return this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)){
          return (<TVShow show={s} key={s.id} selectShow={this.props.selectShow}/> )
        }
      })
    }
    return this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.checkScroll)
  }

  checkScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
       this.props.handleScroll()
    }
 }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
