import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from 'antd';

function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRuntime = props.movieInfo.runtime;
    
    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);
    
    let variables = {
        userFrom,           //uerFrom: userFrom
        movieId,
        movieTitle,
        moviePost,
        movieRuntime
    }
    
    //실행시 Favorite count 가져오기 axios나 fecth를 사용
    useEffect(() => {


        //여기 체크
        //Favorite 숫자 가져오기
        Axios.post('/api/favorite/favoriteNumber', variables)     //불러오는 건 get이지만 눌러서 count해야돼서 post로 선언
        .then(response => {
           setFavoriteNumber(response.data.favoriteNumber);     //Favorite안에 num
           if( response.data.success){
           } else {
               alert('숫자정보를 가져오는데 실패했습니다.');
           }
       });

       Axios.post('/api/favorite/favorited', variables)     //불러오는 건 get이지만 눌러서 count해야돼서 post로 선언
        .then(response => {
            setFavorited(response.data.favorited);
           if( response.data.success){

           } else {
               alert('정보를 가져오는데 실패했습니다.');
           }
       });



    }, []);

    const onClickFavorite = () => {
        if(Favorited) {     //좋아요 되어있을 때
            Axios.post('api/favorite/removeFromFavorite', variables)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber -1 );
                    setFavorited(!Favorited);
                } else {
                    alert('Favorite 리스트에서 지우는 걸 실패했습니다.');
                }
            });
        } else {        //좋아요 안되어있을 때
            Axios.post('api/favorite/addToFavorite', variables)
            .then(response => {
                if(response.data.success){
                    setFavoriteNumber(FavoriteNumber + 1);
                    setFavorited(!Favorited);
                } else {
                    alert('Favorite 리스트에서 추가하는 걸 실패했습니다.');
                }
            });

        }
    }

    return (
    <div>
        <Button onClick={onClickFavorite}>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber} </Button>
    </div>
    )
}

export default Favorite
