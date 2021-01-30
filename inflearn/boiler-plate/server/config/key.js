if(process.env.NODE_ENV === 'prodution'){   
    module.exports = require('./prod'); //배포 할 때
} else {
    module.exports = require('./dev');  //개발 할 때
}