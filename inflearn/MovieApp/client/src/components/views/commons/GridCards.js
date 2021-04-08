import React from 'react'
import { Col } from 'antd';    //row를 자유롭게 만들기위해서 row는 기본 24크기 lg가장클때 하나당6 / md 중간 하나당8 / xs 가장 작을때 하나당24


function GridCards(props) {

    if(props.landingPage){
        return (
            <Col lg={6} md={8} xs={24}>     
                <div style={{ position: 'relative' }}>
                    <a href = {`/movie/${props.movieId}`}>
                        <img style={{ width: '100%', height: '320px'}} src = {props.image} alt={props.movieName}></img>
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24}>     
                <div style={{ position: 'relative' }}>
                    
                        <img style={{ width: '100%', height: '320px'}} src = {props.iㄱmage} alt={props.castName}></img>
        
                </div>
            </Col>
        )

    }
}

export default GridCards
