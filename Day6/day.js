// ##Q1:
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });


// ##Q2
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });


// ##Q3
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });

function hello(){
    return new Promise((reslove) =>{
        setTimeout(()=>{
            alert("Welcome");
        },300)
    })

    
}
function again(){
    return new Promise((reslove) =>{
        setTimeout(()=>{
            // ;
            reslove(alert("thanks"));
        },10000)
    }) 
 
    
}
async function upload_image(){

    const fileInput = document.getElementById('upload');
    fileInput.addEventListener('change', handleFileSelect);
    function handleFileSelect(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        images = `<div class="image">
                <img src="${reader.result}" alt="image">
                </div>`
        var out = document.getElementById('output') 
        out.innerHTML=images
      }
    }
    
}
function forward(){
    setTimeout(() =>{
        window.location.href = "../Day3/Grid.html";
    },15000)
    
}

hello();
upload_image();
again();
forward()