var showOptions = function (e) {
  var breakfast= document.getElementById('breakfast');
  var luch = document.getElementById('lunch');
  var dinner = document.getElementById('dinner');

if (e.target.dataset.selectedCell=='breakfast'){
  breakfast.style.display='block';
  lunch.style.display='none';
  dinner.style.display='none';
} else if (e.target.dataset.selectedCell=='lunch'){
  lunch.style.display='block';
  breakfast.style.display='none';
  dinner.style.display ='none';
} else if (e.target.dataset.selectedCell=='dinner'){
  dinner.style.display='block';
  lunch.style.display ='none';
  breakfast.style.display ='none';
}
  }


var onLoad = function () {
  var cellsElements = document.getElementsByClassName('cell')
  for (var i = 0; i < cellsElements.length; i++) {
    cellsElements[i].addEventListener('click', showOptions)
  }
}
onLoad();
