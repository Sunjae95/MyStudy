import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage] = useState(0);

    const fetchMovies = function (endpoint) {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovies([...Movies, ...response.results]); // 현재Movies에 새로 불러온 results값을 더해줌
                setMainMovieImage(response.results[0]);
                setCurrentPage(response.page);
            });
    }

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetchMovies(endpoint);
        
    }, []);
    
    
    const loadMoreItems = () =>{
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

    return (
        <>
         <div style={{ width: '100%', margin: '0' }}>

             {/* 메인이미지 / x && y 는 x가 존재하면 y를 해라 */}
             {MainMovieImage && 
             <MainImage 
             image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
             title={MainMovieImage.original_title}
             text={MainMovieImage.overview}
             ></MainImage> }

             <div style={{ width: '85%', margin: '1rem auto' }}>
                 <h2>Movies by latest</h2>
                <hr/>

                {/* Movie Grid Cards */}
                {/*key값에 index값을 넣어야 오류 안나옴 */}
                {/* Props으로 넘기려고 선언하는것 */}    
                <Row gutter={[16, 16]}>
    
                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards      
                            landingPage
                            image= {movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}`: null}
                            movieId= {movie.id}
                            movieName= {movie.original_title}                                
                        />
                    </React.Fragment>
                ))}

                </Row>
                
                
             </div>

             <div style={{ display: 'flex', justifyContent: 'center' }}>
                 <button onClick={loadMoreItems}>Load More</button>
             </div>
         </div>
        </>
    )
}

export default LandingPage
