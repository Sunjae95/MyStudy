const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {      //models User를 가져옴
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String,
    },
    movieTitle: {
        type: String,
    },
    moviePost: {
        type: String,
    },
    movieRuntime: {
        type: String,
    },
}, { timestamp: true });     //timestamp를 사용하면 생성된 시간을 자동으로 처리해줌



const Favoirte = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favoirte }