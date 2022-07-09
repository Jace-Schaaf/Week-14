import React from "react";
import Movie from "./movie";
import "../styles/movieList.css";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          id: 0,
          poster:
            "https://m.media-amazon.com/images/I/61n-olilSdL._AC_SY679_.jpg",
          title: "Avatar (2009)",
          summary:
            "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          runtime: "2h 42m",
          rating: "PG-13",
          streaming: "Prime Video",
          reviews: [
           
          ],
        },
        {
          id: 1,
          poster:
            "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
          title: "Saving Private Ryan (1998)",
          summary:
            " Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
          runtime: "2h 49m",
          rating: "R",
          streaming: "Prime Video",
          reviews: [
           
          ],
        },
        {
          id: 2,
          poster: "https://resizing.flixster.com/CVeLKDvNmALeVyvKe_YysZwRQfA=/300x300/v2/https://flxt.tmsimg.com/assets/p10993_v_v9_aw.jpg",
          title: "Young Guns (1988)",
          summary:
            "A group of young gunmen, led by Billy the Kid, become deputies to avenge the murder of the rancher who became their benefactor. But when Billy takes their authority too far, they become the hunted.",
          runtime: "1h 47m",
          rating: "R",
          streaming: "Prime Video",
          reviews: [
           
          ],
        },
        {
          id: 3,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
          title: "The Lord of the Rings: The Return of the King (2003)",
          summary:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          runtime: "3h 21m",
          rating: "PG-13",
          streaming: "Prime Video",
          reviews: [
           
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">Movies</h1>
        <Movie movie={this.state.movieList[0]} />
        <Movie movie={this.state.movieList[1]} />
        <Movie movie={this.state.movieList[2]} />
        <Movie movie={this.state.movieList[3]} />
      </div>
    );
  }
}