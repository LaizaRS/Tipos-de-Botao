const clickinicio = document.querySelector(".tabelanormal");
const clickDefault = document.querySelector('.tabelatrdefault');
const clickHover = document.querySelector(".tabelatrhover");
const clickFocus = document.querySelector(".tabelatrfocus");
const clickDisabled = document.querySelector(".tabelatrdisabled");
const clickLoading = document.querySelector(".tabelatrloading");
const clickMovable = document.querySelector(".tabelatrmovable");

const seeNormal = document.querySelector(".testNormal");
const seeDefault = document.querySelector('.testedefault');
const seeHover = document.querySelector(".testehover");
const seeFocus = document.querySelector(".testefocus");
const seeDisabled = document.querySelector(".testedisabled");
const seeLoading = document.querySelector(".testeloading");
const seeMovable = document.querySelector(".testemovable");

clickinicio.addEventListener('click', function(){
  seeNormal.style.visibility = 'visible';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'hidden';
});

clickDefault.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'visible';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'hidden';
});

clickHover.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'visible';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'hidden';
});

clickFocus.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'visible';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'hidden';
});

clickDisabled.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'visible';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'hidden';
});

clickLoading.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'visible';
  seeMovable.style.visibility = 'hidden';
});

clickMovable.addEventListener('click', function(){
  seeNormal.style.visibility = 'hidden';
  seeDefault.style.visibility = 'hidden';
  seeHover.style.visibility = 'hidden';
  seeFocus.style.visibility = 'hidden';
  seeDisabled.style.visibility = 'hidden';
  seeLoading.style.visibility = 'hidden';
  seeMovable.style.visibility = 'visible';
});