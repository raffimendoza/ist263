import '../styles/embedded.scss'
import React from "react";
import PropTypes from "prop-types";

const SpotifyEmbed = () => (
  <div className="spotify-responsive">
    <h2>Spotify Playlist of the day:</h2>
    <br />
    <iframe
      width="250"
      height="380"
      src={`https://open.spotify.com/embed/playlist/1lINpaDtPX4SifYHlNQryY?utm_source=generator`}
      frameBorder="0"
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      title="Embedded spotify"
    />
    <br /> <br />
    <a href="https://study.com/academy/popular/is-it-good-to-listen-to-music-while-studying.html#:~:text=Music%20that%20is%20soothing%20and,sessions%2C%20music%20can%20aid%20endurance."><h2>Is It Good to Listen to Music While Studying?</h2></a>
  </div>
);

SpotifyEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default SpotifyEmbed;