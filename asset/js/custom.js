
// product display js slider start
var productImg = document.getElementById('productImg')
var smallimg = document.querySelectorAll('.smallImg');

smallimg[0].onclick = function(){
    productImg.src = smallimg[0].src
}
smallimg[1].onclick = function(){
    productImg.src = smallimg[1].src
}
smallimg[2].onclick = function(){
    productImg.src = smallimg[2].src
}

// product Display js slider end


//====================================================================================================================

// Produc5t Quintity Management js code start
var increment = document.getElementById('inc');
var decrement = document.getElementById('dec');
var quintity = document.getElementById('quintity');
var quintiyCount = 1;
increment.addEventListener('click', function(e){
  
    var a = quintiyCount++;
    if(a > 10 ){
        var tex = quintity.value = 10;
        quintity.innerText = 10;
    }else{
        var tex = quintity.value = a;
        quintity.innerText = tex;
    }
    
})
decrement.addEventListener('click', function(){

    var a = quintiyCount--;
    if( a < 1 ){
        var tex = quintity.value = 1;
        quintity.innerText = tex;
    }else{
        var tex = quintity.value = a;
        quintity.innerText = tex;
    }
   
})

// Produc5t Quintity Management js code end

//========================================================================================================