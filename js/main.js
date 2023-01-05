var elForm = document.querySelector('.form')
var elInp1 = document.querySelector('.inp1')
var elBtn = document.querySelector('.btn')
var arr = ['olma', 'shaftoli', 'behi', 'tarvuz', 'qovun', 'ananas', 'banan', 'anjir', 'nok', 'kivi', 'orik', 'olxori', 'uzum', 'gilos', 'mandalin', 'limon', 'anor', 'apelsin', 'xurmo',]


var a = elInp1.value
a.trim()
a.toLoverCase

elBtn.addEventListener('click', function(){
    if(arr.includes(elInp1.value)){
        alert('qancha kerak');
    }else{
        alert('unday meva yoq');
    }
})

