// ..................Start Swiper story...................

let swiper = new Swiper(".mySwiper",{
    slidesPerView: 5,
    spaceBetween: 5,
})

// ..................Window Scroll.........................
window.addEventListener('scroll', ()=>{
    document.querySelectorAll('.profile-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display='none'
})

// ...................Start Aside.........................
let menuItem = document.querySelectorAll('.menu-item');

// ..............Active remove.............
const removeActive = ()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    })
}


menuItem.forEach(item=>{
    item.addEventListener('click', ()=>{
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'    
    })
})



// .............Notification..........................
document.querySelector('#Notify-box').addEventListener('click', ()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})


document.querySelector('#messageMenu').addEventListener('click', ()=>{
    document.querySelector('#notfyCounter2').style.display='none'
    document.querySelector('.messages').classList.toggle('boxShadow1');

        // .............SetTimeout.........................
   setTimeout(() => {
    document.querySelector('.messages').classList.remove('boxShadow1');
}, 900);
})


// ............Start Friend Request.....................
let Accept = document.querySelectorAll('#Accept');
let Delete = document.querySelectorAll('#Delete');


Accept.forEach(accept=>{
    accept.addEventListener('click', ()=>{
        accept.parentElement.style.display='none'
        accept.parentElement.parentElement.querySelector('.alert').style.display='block'
    })
});

Delete.forEach(deleteRq=>{
    deleteRq.addEventListener('click', ()=>{
        deleteRq.parentElement.parentElement.style.display='none'
    })
})



// ..................Start Profile Popup...................
document.querySelectorAll('#my-profile-picture').forEach(AllProfile=>{
    AllProfile.addEventListener('click', ()=>{
        document.querySelector('.profile-popup').style.display='flex'
    })
})

document.querySelectorAll('.close').forEach(AllCloser=>{
    AllCloser.addEventListener('click', ()=>{
        document.querySelector('.profile-popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'
    })
})

document.querySelector('#profile-upload').addEventListener('change', ()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})
// ..................End Profile Popup...................


// ..................Start Add Post Popup.................
document.querySelector('#create-lg').addEventListener('click', ()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change', ()=>{
    document.querySelector('#postImg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').
    files[0]
    )
})
// ..................End Add Post Popup...................


// ..................Start Add Story Popup...................
document.querySelector('#add-story').addEventListener('change', ()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').
    files[0]);
    document.querySelector('.add-story').style.display='none'
});
// ...............End Add Story Popup.......................



// .................Mini Button input..................
document.querySelector('.mini-button').addEventListener('click', ()=>{
    document.querySelector('.input-post').classList.add("boxShadow1")


       // .............SetTimeout.........................
   setTimeout(() => {
    document.querySelector('.input-post').classList.remove("boxShadow1");
}, 900);
});

document.querySelector('.mini-button').addEventListener('dblclick', ()=>{
    document.querySelector('.add-post-popup').style.display='flex'

});


// ..................Liked Button.....................
document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click', ()=>{
       liked.classList.toggle('liked');
    })
})




// .....................Theme Customize........................
document.querySelector('#Theme').addEventListener('click', ()=>{
    document.querySelector('.theme-customize').style.display='flex'
});



// ................Font Size......................
let fontSize = document.querySelectorAll('.choose-size span');

const removeSelectorActive = ()=>{
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
}

fontSize.forEach(size=>{

    size.addEventListener('click', ()=>{
        let fontSize;
        removeSelectorActive();
        size.classList.toggle('active');
    
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
        }
    
        // .............HTML Font Size Change...................
        document.querySelector('html').style.fontSize = fontSize;
    })
})



// ................Primary Color......................
let colorpallete = document.querySelectorAll('.choose-color span')
var root = document.querySelector(':root');

// .............Remove coloractive...............
const removeActiveColor = () =>{
    colorpallete.forEach(color=>{
        color.classList.remove('active')
    })
}

colorpallete.forEach(color=>{
    color.addEventListener('click', ()=>{
        let primaryHue;
        removeActiveColor();
        let Hue;

        color.classList.add('active');

        if(color.classList.contains('color-1')){
            Hue = 252;
        }else if(color.classList.contains('color-2')){
            Hue = 52;
        }else if(color.classList.contains('color-3')){
            Hue = 352;
        }else if(color.classList.contains('color-4')){
            Hue = 152;
        }else if(color.classList.contains('color-5')){
            Hue = 202;
     }

     root.style.setProperty('--primary-color-hue', Hue)

    })
});


// .................Background Color.............
let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');



// ................Theme Background value............
let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;


const changeBg = () =>{
    root.style.setProperty('--color-dark-light-theme', darkColorLightTheme);
    root.style.setProperty('--color-light-light-theme', lightColorLightTheme);
    root.style.setProperty('--color-white-light-theme', whiteColorLightTheme);
}


bg2.addEventListener('click', ()=>{
    darkColorLightTheme = '95%';
    lightColorLightTheme = '5%';
    whiteColorLightTheme = '10%';

    //...............Add Active Class...............
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bgIcon();
    changeBg();
});

bg1.addEventListener('click', ()=>{
    //...............Add Active Class...............
    bg1.classList.add('active');
    bg2.classList.remove('active');

    window.location.reload();   
});

// ...........Dark Theme Aside Icon................
let menuItemImg = document.querySelectorAll('.menu-item span img');

const bgIcon = () =>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg');
    })
}