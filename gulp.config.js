module.exports = function () {
    var client = './src/client/';
    var config = {
        //all js
        temp: './.tmp'
        , alljs: ['./src/**/*.js', './*.js']
        , less: client + 'styles/styles.less'
    };
    return config;
};