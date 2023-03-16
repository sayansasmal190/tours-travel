let searchBtn = document.querySelector('#search-btn');//Variables defined with let cannot be redeclared.You cannot accidentally redeclare a variable. # sign represent id name.    // document.querySelector() is used to select an element ,  an id , and also a class
let searchBar = document.querySelector('.search-bar-container');// . sign represents class name
 //The addEventListener() method attaches an event handler to a document means what event we are going to perform.

 let formBtn = document.querySelector('#login-btn');
 let loginForm = document.querySelector('.login-form-container');
 let formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn =  document.querySelectorAll('.vid-btn');


window.onscroll = () =>{      //The onscroll event occurs when an element's scrollbar is being scrolled. 
     searchBtn.classList.remove('fa-times'); // when we scroll down the search button will get removed.
     searchBar.classList.remove('active'); // when we scroll down, the search bar will get removed.
     menu.classList.remove('fa-times');//when we scroll down, the  menu bar will get removed.
     navbar.classList.remove('active');//when we scroll down, the navigation options or bar will get removed.
     loginForm.classList.remove('active');//when we scroll down, the login form will get removed.
}

menu.addEventListener('click' , () =>{  
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active'); //on clicking the menubar...the options that is Home , Book , Packages , Gallery , etc comes down(toggle)
}); 

searchBtn.addEventListener('click' , () =>{  
    searchBtn.classList.toggle('fa-times');  //A DOMTokenList is a set of space separated tokens and The classList Property of an HTML element represents a DOMTokenList.    //DOM manipulation is when you use JavaScript to add, remove, toggle and modify elements of a website.
    searchBar.classList.toggle('active'); //The classList property returns the CSS classnames of an element.
});  

formBtn.addEventListener('click' , () =>{  

    loginForm.classList.add('active');

}); 

formClose.addEventListener('click' , () =>{  

    loginForm.classList.remove('active');
    
}); 

//Related to sliding of videos on clicking the Videobuttons//
videoBtn.forEach(btn =>{                                                   //code for - each circle is being highlighted with orange on clicking 'STARTS'
    btn.addEventListener('click' , ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');                                       //code for - each circle is being highlighted with orange on clicking 'ENDS'



        let src=btn.getAttribute('data-src');                              //code for - on clicking each circle new new videos will come up on screen 'STARTS'
 
        document.querySelector('#video-slider').src=src                    //code for - on clicking each circle new new videos will come up on screen 'ENDS'
    });

});
     
       
var swiper = new Swiper(".review-slider", {         //this line of code taken from https://codesandbox.io/p/sandbox/u8hymm?file=%2Findex.html&selection=%5B%7B%22endColumn%22%3A2%2C%22endLineNumber%22%3A58%2C%22startColumn%22%3A2%2C%22startLineNumber%22%3A58%7D%5D    , just .review-slider name is given

    spaceBetween: 20,
    loop: true,
    autoplay: {

            delay: 2500,        //automatic swipe after some delay
            disableOnInteraction: false,    //if someone clicks on the review of people then also swiping will not stop

    },
    breakpoints: {

         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },

    },
});

   
var swiper = new Swiper(".brand-slider", { 

    spaceBetween: 20,
    loop: true,
    autoplay: {

            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
    
             450: {
                slidesPerView: 2,
             },
             768: {
                slidesPerView: 3,
             },
             991: {
                slidesPerView: 4,
             },
             1200: {
                slidesPerView: 5,
             },
           
    
        },
    });