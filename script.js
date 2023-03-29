let body = document.querySelector('body');
body.style = 'width: 90%; margin: 0 auto; margin-top: 10px;'

let header = document.querySelector('header');
header.style = 'background-color: rgb(236, 15, 15); display: flex; justify-content: center;';

let nav = document.querySelector('nav');
nav.style = 'background-color: darkorchid; padding: 20px 30px; display: flex; justify-content: center; margin: 10px 0'

let main = document.querySelector('main');
main.style = 'margin: 20px auto; background-color: palevioletred; padding: 20px 30px; max-width: 60%;'

let mc = document.querySelector('.mc');
mc.style = '  text-align: center; ';


let divBar = document.querySelector('div');
divBar.style = 'float: left;background-color: rgb(81, 81, 212); height: 160px; '

let bar2 = document.querySelector('.bar2');
bar2.style = 'float: right;background-color: rgb(81, 81, 212); height: 160px; '

let section = document.getElementsByTagName('section');
for (let i = 0; i < section.length; i++) {
    section[i].style = 'background-color: rgb(81, 81, 212); display: flex; justify-content: center; margin: 5px; width: 60%; margin: 10px auto;';
}

let footer = document.querySelector('footer');
footer.style = 'background-color: darkorchid;  text-align: center; padding: 20px 30px; '


 