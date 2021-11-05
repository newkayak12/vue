module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{ //테이블명은  posts
        content:{
            type:DataTypes.TEXT,
            allowNull:false

        },
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'
    });

    Post.associate = (db)=>{
        //테이블 간의 관계를 설정해주는 부분
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.belongsToMany(db.User, {through:"Like", as:"Likers"})
        db.Post.hasMany(db.Image)
        db.Post.belongsToMany(db.Hashtag, {through:'PostHashtag'})
        db.Post.belongsTo(db.Post,{as:"Retweet"})
    }

    return Post;
}