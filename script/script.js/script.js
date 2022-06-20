// const hTopic1 = document.getElementById('');

const hTopics = document.querySelectorAll('.topics');
const hTopicsLine = document.querySelectorAll('.topics-underline');

var gCurrTopic = document.getElementById("callme1");
var gCurrTopicLine = document.getElementById("cm1u");


hTopics.forEach((ht)=>{
    ht.addEventListener('mouseenter', function(){
    this.classList.add('active');
    currLineID = "cm" + this.id.substr(6, 1) + "u";
    document.getElementById(currLineID).classList.add('active');
});

ht.addEventListener('mouseleave', function(){
    if(ht!=gCurrTopic){
    this.classList.remove('active');
    currLineID = "cm" + this.id.substr(6, 1) + "u";
    document.getElementById(currLineID).classList.remove('active');
}});
});
function changeTopic(args) {
  
    gCurrTopic.classList.remove('active');
    gCurrTopicLine.classList.remove('active');
    
    currLineID = "cm" + args.substr(6, 1) + "u";
    let currTopic = document.getElementById(args);
    let currLine= document.getElementById(currLineID);
    gCurrTopic = currTopic;
    gCurrTopicLine = currLine;
    currTopic.classList.add('active');
    currLine.classList.add('active');
}



const wAInfo = document.querySelectorAll('.wa-info');
wAInfo.forEach((wai)=>{
    wai.addEventListener('mouseenter', function(){
        this.classList.add('active');
        waiLogo = wai.querySelector('.wa-logo');
        // waiUl = wai.querySelector('.wa-underline');
        waiLogo.classList.add('active');
        // waiUl.classList.add('active');
    });
});
    
wAInfo.forEach((wai)=>{
    wai.addEventListener('mouseleave', function(){
        this.classList.remove('active');
        waiLogo = wai.querySelector('.wa-logo');
        // waiUl = wai.querySelector('.wa-underline');
        waiLogo.classList.remove('active');
        // waiUl.classList.remove('active');
    });
});
 
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((sc)=>{
    sc.addEventListener('mouseenter', function(){
        this.classList.add('active');
        scLogo = sc.querySelector('.card-logo');
        scLogo.classList.add('active');
        scTitle = sc.querySelector('.card-title');
        scTitle.classList.add('active');
        sctext = sc.querySelector('.card-text');
        sctext.classList.add('active');
    });
});
serviceCards.forEach((sc)=>{
    sc.addEventListener('mouseleave', function(){
        this.classList.remove('active');
        scLogo = sc.querySelector('.card-logo');
        scLogo.classList.remove('active');
        scTitle = sc.querySelector('.card-title');
        scTitle.classList.remove('active');
        sctext = sc.querySelector('.card-text');
        sctext.classList.remove('active');
    });
});
// слайдер
function ToggleHMenu(){
    
    let hMenu = document.querySelector('.h-mobile-menu');
    if(hMenu.classList.contains('active')){
    hMenu.classList.remove('active');  
    }
    else{
        hMenu.classList.add('active');  
    }
}
// слайдер
//
