

async function panda(site)  {
  return new Promise(async resolve => {
const puppeteer = require('puppeteer');  
    const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //https://www.facebook.com/assertivainformacoes/videos/1518592431558890/
  //https://www.facebook.com/awortinkosnews/videos/1499750660142623/
  var kacian
  await page.goto(site);
if(site.indexOf("m.facebook")==-1){
  const cam=await page.evaluate(()=>{
      var jumlah=document.querySelectorAll('script').length
      var ko;
      for(var i=0;i<jumlah;i++){
          var sam=document.querySelectorAll('script')[i].innerText
          if(sam.indexOf(".mp4")>-1){
              ko=sam
          }
      }
      return ko;
  });
var kamen=cam.substring(cam.indexOf("src_no_ratelimit"),cam.indexOf("\,",cam.indexOf("src_no_ratelimit")))
kacian=kamen.substring(17,kamen.length).replace("\"","").replace("\"","")
}else{
  const pelo=await page.evaluate(()=>{
    return JSON.parse(document.querySelectorAll(".widePic")[0].children[0].getAttribute("data-store")).src
  })
  kacian=pelo
}
var fs = require('fs');

// var file = fs.createWriteStream("video.mp4");
var axios=require("axios")
var file=fs.createWriteStream('public/video.mp4')
var coki=await axios({
  method:'get',
  url:kacian,
  responseType:'stream'
}).catch(err=>{
 browser.close();
return "error"
})
try{
  await coki.data.pipe(file)

}catch(err){
console.log("error")
resolve("error")
await browser.close();


}
  file.on("finish",async ()=>{
console.log("selesai")
resolve("selesai")
await browser.close();
   

   
  })
});
  
}
module.exports=panda