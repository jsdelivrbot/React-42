import React from 'react';
import axios from 'axios';

import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';

import VideoList from './video-list';

import '../style/style.css';


const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?certification_country=US&language=fr&sort_by=popularity.desc&include_adult=true&api_key=';
const API_KEY = 'ebf0a24d795917b1dac3efb296de4e6d';
const SEARCH_URL = 'search/movie?certification_country=US&language=fr&include_adult=true'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: {},
            currentMovie : {}
        }
    };

    componentWillMount() {
        this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}${API_KEY}`).then(function(response) {
            this.setState({ movieList:response.data.results.slice(1,4),
                            currentMovie: response.data.results[0] }, function() {
                                this.applyVideoToCurrentMovie();
                            });
        }
        .bind(this));
    };

    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?api_key=${API_KEY}&append_to_response=videos&include_adult=true`).then(function(response) {
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            
            newCurrentMovieState.videoId = youtubeKey;
            this.setState( {currentMovie : newCurrentMovieState} );
        }
        .bind(this));
    };

    onClickListItem(film) {
        this.setState({ currentMovie : film }, function() {
            this.applyVideoToCurrentMovie();
            this.setRecommandation();
        });
        
    };

    setRecommandation() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?api_key=${API_KEY}&language=fr`).then(function(response) {
            this.setState({ movieList:response.data.results.slice(0,3) });
        }
        .bind(this));
    };

    onClickSearch(searchText) {
        if(searchText) {
            axios.get(`${API_END_POINT}${SEARCH_URL}&api_key=${API_KEY}&query=${searchText}`).then(function(response) {
                if(response.data && response.data.results[0]) {
                    if(response.data.results[0].id != this.state.currentMovie.id) {
                        this.setState({currentMovie: response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommandation();
                        });
                    };
                };
            }

            .bind(this));
        };
    };

    render() {
        const renderVideoList = () => {
            if(this.state.movieList.length >= 3) {
                return (
                    <VideoList movieList = {this.state.movieList} callback = {this.onClickListItem.bind(this)} />
                );
            };
        };

        return (
            <div>

                <h1 className = 'main_title'>Rechercher votre Bande-Annonce</h1>

                <div className = 'search_bar'>
                    <SearchBar callback = {this.onClickSearch.bind(this)} />
                </div>

                <div className = 'row'>
                    <div className = 'col-md-9'>
                        <Video videoId = {this.state.currentMovie.videoId} />
                        <VideoDetail title = {this.state.currentMovie.title}
                                     description = {this.state.currentMovie.overview}
                        />
                    </div>

                    <div className = 'col-md-3'>
                        {renderVideoList()}
                    </div>
                </div>
            </div>
        );
    };
};

export default App;