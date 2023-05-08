const music = new Audio('vande.mp3');

const songs = [
    {
    id :'1',
    songname :`On the low
    <div class="subtitles">Burna Boy</div>`,
    poster:"burna.jpg"
},
{
    id:'2',
    songname:`It's plenty
    <div class="subtitles">Burna Boy</div>`,
    poster:"burna.jpg"
},
{
    id:'3',
    songname:`Holiday
    <div class="subtitles">Rema</div>`,
    poster:"rema.jpg"
},
{
    id:'4',
    songname:`Sability
    <div class="subtitles">Ayarr Star</div>`,
    poster:"star.jpg"
},
{
    id:'5',
    songname:`Body and Soul
    <div class="subtitles">Joeboy</div>`,
    poster:"joeboy.jpg"
},
{
    id:'6',
    songname:`Qui
    <div class="subtitles">Tayc</div>`,
    poster:"tayc.jpg"
},
{
    id:'7',
    songname:`Bad to me
    <div class="subtitles">WIZKID</div>`,
    poster:"wizzy.jpg"
},
{
    id:'8',
    songname:`Money & Love
    <div class="subtitles">WIZKID</div>`,
    poster:"wizzy.jpg"
},
{
    id:'9',
    songname:`Case
    <div class="subtitles">Teni</div>`,
    poster:"teni.jpg"
},
{
    id:'10',
    songname:`Koroba
    <div class="subtitles">Tiwa Savage</div>`,
    poster:"tiwa.jpg"
},
{
    id:'11',
    songname:`Red flags
    <div class="subtitles">Ruger</div>`,
    poster:"ruger.jpg"
},
{
    id:'12',
    songname:`The Search
    <div class="subtitles">NF</div>`,
    poster:"nf.jpg"
},
{
    id:'13',
    songname:`Hope
    <div class="subtitles">NF</div>`,
    poster:"nf.jpg"
},
{
    id:'14',
    songname:`Keza
    <div class="subtitles">Kivumbi King</div>`,
    poster:"kivumbi.jpg"
},
{
    id:'15',
    songname:`Time
    <div class="subtitles">Kivumbi King</div>`,
    poster:"kivumbi.jpg"
},
{
    id:'16',
    songname:`Feel
    <div class="subtitles">Davido</div>`,
    poster:"Davido.jpg"
},
{
    id:'17',
    songname:`Party no de stop
    <div class="subtitles">Adekulne gold</div>`,
    poster:"gold.jpg"
}

]
Array.from(document.getElementsByClassName('songitem')).forEach((Element,i)=>{
    Element.getElementsByTagName('img')[0].src=songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML=songs[i].songname;
})

let masterplay = document.getElementById('masterplay');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=o){
        music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
   
})

































0735985638