// let forminput = document.getElementById('form')

// let text = document.getElementById('errorMessange')

// forminput.addEventListener('submit',function(event){
//     event.preventDefault()
//     let pochta = document.getElementById('email').value
//     let parol = document.getElementById('pwd').value    

//     console.log("pochta",pochta);
//     console.log("Parol",parol);
//     if (!pochta.includes('@')) {
//         text.textContent = "Sizde problema bar"
//     }   
//     else if(parol.length < 6){
//         text.textContent = "sizdin parol 6 symvildan tomen"
//     }else{
//         text.style.color = "qreen"
//         text.textContent = "Sizde bari duris! Qabuladanady!"
//     }
// })



// let fruits = document.getElementById('dropDown')
// let text = document.getElementById('selectedValue')

// fruits.addEventListener('change',function(){
//     text.textContent = `jemis turi: ${fruits.value}`
// })




// let focused = document.getElementById('focused')

// let text = document.getElementById('selectedValue')




// focused.addEventListener('input', function(){
//     text.textContent = focused.value
// })


// focused.addEventListener('focus', function(){
//     text.textContent = "input was focused"
// })

// focused.addEventListener('blur', function(){
//     text.textContent = "focus was leaved"
// })



let range = document.getElementById('ranged-input')

let text = document.getElementById('selectedValue')

range.addEventListener('input', function(){
    text.textContent = range.value
})