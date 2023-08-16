const btn =document.querySelector("#one");
// btn.addEventListener('click',hello);
btn.addEventListener('click',add)

function add(){
    hi()
    let x = prompt("times ittrations");
    let number = 0;
    let sum = 0;
    for (; x > 0; x-=1){
        number = +prompt("Your Number");
        sum +=number;
    }
    new_div = document.createElement('div');
    new_element = document.createElement('h1');
    new_element.setAttribute('style',"color:red;")
    
    new_content = document.createTextNode(`Your sum is a ${sum}`);
    new_div.appendChild(new_element);
    new_element.appendChild(new_content);
    document.getElementById('two').appendChild(new_div)    
}
function hi(){
    alert("Welcome");
    console.log(prompt("Name"));

}
// function hello(){
//     var el =  document.createElement('div');
//     el.setAttribute('id','forme')
//     var oel = document.createElement("h1");
//     var content = document.createTextNode("welcome");
//     oel.appendChild(content)
//     el.appendChild(oel)
//     document.body.innerHTML += el.outerHTML
//     setTimeout(()=>{
//         document.getElementById('forme').remove()
//     },200)
// }
function  triangle(base,height){
    console.log((base * height) / 2)
}

function student_faculty(n){
    switch(n) {
        case 'FCI':
          console.log(" You’re eligible to Programing tracks")
          break;
        case "faculty: Engineering":
            console.log(" You’re eligible to Programing tracks")
          // code block
          break;
        default:
            console.log("done")
      } 

}

