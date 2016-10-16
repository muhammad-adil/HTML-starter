/* ==============================
        画像の辺の長さ識別
============================== */
// if(window.addEventListener){
//     window.addEventListener('load', image_class, false);
// }else if(window.attachEvent){
//     window.attachEvent('onload', image_class);
// }

// function image_class(){
//     var img = new Image();
//     var images = document.querySelectorAll('img');

//     for(var i = 0; i < images.length; i++){
//         img.src = images[i].src;

//         if(img.width < img.height){
//             images[i].className += ' vertically_long';
//         }else if(img.width > img.height){
//             images[i].className += ' horizontally_long';
//         }else{
//             images[i].className += ' square';
//         }
//     }
// }