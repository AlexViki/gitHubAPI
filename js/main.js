document.getElementById("btn_get_repos").addEventListener('click', () => {
    console.log('--- Start ---');
    getDate();
} );

let tmp = '';
let avatar = "";
let logo = document.getElementById('logo');
let image = document.createElement("img");

const getDate = () =>{
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                console.log(result[i].login);
                console.log(result[i].avatar_url);
                tmp = tmp + result[i].login + "<br>";
                document.getElementById('result').innerHTML = tmp;
                image.src = result[i].avatar_url;
                logo.appendChild(image);
            }
            console.log(result);
            console.log(result[2].avatar_url);
        }
})}