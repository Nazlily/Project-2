// let data = [
//     {id:1,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:2,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:3,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:4,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:5,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:6,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:7,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:8,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:9,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:10,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:11,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:12,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:13,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:14,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
//     {id:15,name:"BTC / بیت کوین",img:"./Assets/images/Bitcoin.png",price:"29,306.9 $",changes:"1.08%+"},
// ]



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//-------------------------------------------------------

//(function () {

// for(i=0; i<=x; i++){
//     let container = document.createElement("div")
//     container.classList.add("body2tr")
//     container.append(data[i],div)
//     //-------------------------------------------------
//     let spanId = document.createElement("span")
//     spanId.classList.add("body2number")
//         spanId.append(data[i],span)
//         //-------------------------------------------------
//         let imgBox = document.createElement("div")
//         imgBox.classList.add("body2table")
//         let image = document.createElement("img")
//         image.classList.add("body2imgs")
//         image.setAttribute("src",data[i])
//         //-------------------------------------------------
//         let spanName = document.createElement("span")
//         spanName.classList.add("body2tableName")
//         spanName.append(data[i],span)
//         //-------------------------------------------------
//         let spanPrice = document.createElement("span")
//         spanPrice.classList.add("body2price")
//         spanPrice.append(data[i],span)
//         //-------------------------------------------------
//         let spanChanges = document.createElement("span")
//         spanChanges.classList.add("body2changes")
//         spanChanges.append(data[i],span)
//         //-------------------------------------------------
//         let button = document.createElement("button")
//         button.classList.add(body2button)
//     }
// })()


// ----------------------------------

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//---------------------------------------------------


