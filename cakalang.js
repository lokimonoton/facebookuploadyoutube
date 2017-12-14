
async function panda(site,title){
return new Promise(async resolve => {
var panda=require('./panda')
    const cakim=await panda(site)
    if(cakim=="selesai"){
const exec = require('child_process').exec;    
exec('youtube-upload --title="'+title+'" public/video.mp4', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
console.log('https://www.youtube.com/watch?v='+stdout)
  resolve('https://www.youtube.com/watch?v='+stdout)
        });
  
    
}
else{
    resolve("error")
}
})
}
module.exports=panda