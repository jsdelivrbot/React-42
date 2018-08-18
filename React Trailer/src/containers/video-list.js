import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    const {movieList} = props;

    return (
        <div>
            <ul>
                {
                    movieList.map(film => {
                        return (
                            <VideoListItem key = {film.id}
                                           film = {film}
                                           callback = {receiveCallBack}
                            />
                        );
                    })
                }

            </ul>
        </div>
    );

    function receiveCallBack(film) {
        props.callback(film);
    };

};

export default VideoList;