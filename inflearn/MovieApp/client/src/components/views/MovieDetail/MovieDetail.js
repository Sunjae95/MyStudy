import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Section/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function MovieDetail(props) {
       
    let movieId = props.match.params.movieId;
    
    const [Movie, setMovie] = useState([]);
    const [Casts, setCasts] = useState([]);     // []데이터를 어떻게 받을 것인지 따라 바꿔줘야됨
    const [ActorToggle, setActorToggle] = useState(false);  //상태변경하기 위해 false값을 넣음

    //랜딩되면 시작하는것
    useEffect( () => {
        
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

            //영화정보 state
            fetch(endpointInfo)
                .then(response => response.json())
                .then(response => {
                console.log(response);
                 setMovie(response);
                }
            );

            // 영화 출연진 state
            fetch(endpointCrew)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setCasts(response.cast);
                }
            );
        
    },[]);  //[]가 없으면 무한루프 됨

    const togglActorView = () =>{
        setActorToggle(!ActorToggle);
    }

    return (

        <div>
        {/* Header*/}
        
     
            <MainImage 
            image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
            title={Movie.original_title}
            text={Movie.overview}>
            </MainImage> 
        
     

        

        {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>
            {/* Movie Info */}
            <MovieInfo movie={ Movie }/>

            <br />
            {/* Actor Grid */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <button onClick={togglActorView}>Toggle Actor View</button>

            </div>
            {ActorToggle && 
            <Row gutter={[16, 16]}>
    
                {Casts && Casts.map((cast, index) => (
                    <React.Fragment key={index}>
                        <GridCards      
                            image= {cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}`: null}
                            // castName= {cast.name}
                            castName= {cast.profile_path ? cast.name: null}                                
                        />
                    </React.Fragment>
                ))}

                </Row>
            }
              
        </div>
        </div>
    );
}

export default MovieDetail
