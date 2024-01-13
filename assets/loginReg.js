// ..................Window Scroll.........................
window.addEventListener('scroll', ()=>{
    document.querySelector('.form-registration').style.display='none'
})



// ..................Start Form Registration Popup.........
document.querySelector('#popRegForm').addEventListener('click', ()=>{
    document.querySelector('.form-registration').style.display='flex'
})


// ..................Close IconBtn.........................
document.querySelectorAll('.close').forEach(AllCloser=>{
    AllCloser.addEventListener('click', ()=>{
        document.querySelector('.form-registration').style.display='none'
    })
})