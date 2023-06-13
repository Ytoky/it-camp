function myFunk() {
    console.log(document.getElementById("elem1").value, document.getElementById("elem2").value)
    const neededWeight = document.getElementById("elem1").value - document.getElementById("elem2").value
    if (document.getElementById("elem1").value === ''){
        alert(`Необходимо вписать какова необходимая загрузка`);
    }else if(document.getElementById("elem2").value === ''){
        alert(`Необходимо вписать вес шаров в мельнице.`);
    }else if(document.getElementById("elem2").value > document.getElementById("elem1").value){
        alert(`В мельнице достаточно шаров.`);
    }else{
        alert(`Необходимо загрузить ${neededWeight}т шаров.`);
    }
}

function scrollToForm(){
    window.scrollTo({top: 2500, behavior: 'smooth'})
}
