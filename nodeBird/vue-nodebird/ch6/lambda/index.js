const AWS= require('aws-sdk');
const Sharp = require('sharp');

const S3 = new AWS({
    regex:'ap-northease-2'
});

exports.handler = async(event, context, callback) => {
    const Bucket = event.Records[0].s3.bucket.name;
    const Key = event.Records[0].s3.object.key;
    const filename = Key.split('/')[Key.split('/').length-1];
    const ext = Key.split('.')[Key.split('.').length-1];
    const requiredFormat = ext ==='jpg' ? 'jpgeg': ext; // sharp에서는 jpg 대신 jpeg사용

    try{
        const s3Object = await s3.getObject({
            //s3이미지를 받아준다.
            Bucket,
            Key,
        }).promise();

        const resizedImage = await Sharp(s3Object.Body).resize(800,800,{fit:'inside'})
            .toFormat(requiredFormat).toBuffer();

        await S3.putObject({
            Body:resizedImage,
            Bucket,
            Key:`thumb/${filename}`,
        }).promise();
        return callback(null, `thumb/${filename}`);
    } catch (e){
        console.error(e)
        return callback(e)
    }
}

//Lambda는 결국 node/ js로 짜는 모듈
//async(event, context, callback) 이 부분은 AWS-Lambda에서 정해 놓은 것은 주입해 줄거라 맞춰야함