const fs = require('fs');
const path = require('path');

const Data_Path = path.join(__dirname,'../data/movieList.json');
const DataGenre_Path = path.join(__dirname,'../data/genreList.json');
const DataVideo_Path = path.join(__dirname,'../data/videoList.json');
const userTokes_Path = path.join(__dirname,'../data/userToken.json');
const Movies = {
    // doc du lieu tat ca loai phim tu file
    all : function() {
        return JSON.parse(fs.readFileSync(Data_Path, 'utf8'));
    },
    genreMovie : function() {
        return JSON.parse(fs.readFileSync(DataGenre_Path, 'utf8'));
    },
    videoMovie : function() {
        return JSON.parse(fs.readFileSync(DataVideo_Path, 'utf8'));
    },
   userTokens : function(){
    return JSON.parse(fs.readFileSync(userTokes_Path, 'utf8'));
   }

};



module.exports = Movies;
