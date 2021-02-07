const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => {
    //mongoDB에서 숫자가져오기
    Favorite.find({ "movieId" : req.body.movieId })
        .exec((err, info) => {
            if(err) return res.status(400).send(err);
            
            //프론트에 숫자보내주기
            res.status(200).json({ success: true, favoriteNumber: info.length });
        });
});

router.post('/favorited', (req, res) => {
    //자신이 이 영화를 Favorite 리스트에 넣었는지 정보 DB에서 가져오기
    Favorite.find({ "movieId" : req.body.movieId, "userFrom": req.body.userFrom  })
        .exec((err, info) => {
            if(err) return res.status(400).send(err);
            
            let result = false;
            if(info.length !== 0){      //좋아요를 눌렀다면 true 아니면 그대로 false 
                result =true;
            }
            res.status(200).json({ success: true, favorited: result  });
            
        });
});

//Favorite했을 때 DB에 Favorite 취소
router.post('/removeFromFavorite', (req, res) => {

    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
    .exec((err, doc) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true , doc });
    })
});

//Favorite했을 때 DB에 Favorite했다고 저장
router.post('/addToFavorite', (req, res) => {
    
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    });
});

//FavoritePage
router.post('/getFavoriteMovie', (req, res) => {
    
    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites});       //프론트에 userFrom에 맞는 data 보내줌
        })
});

module.exports = router;
