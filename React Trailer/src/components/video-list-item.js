import React from 'react';
import '../style/style.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const VideoListItem = (props) => {
    const film = props.film;

    return (
        <li className = 'list-group-item' onClick = {handleOnClick} >
            <div className = 'media'>
                <div className = 'media'>
                    <center><img className = 'media-object img-rounded' height = '275px' src = {`${IMAGE_BASE_URL}${film.poster_path}`} /></center>
                </div>

                <div className = 'media-body'>
                    <h5 className = 'title_list_item'>{film.title}</h5>
                </div>
            </div>
        </li>
    );
    
    function handleOnClick() {
        props.callback(film);
    };
};

export default VideoListItem;