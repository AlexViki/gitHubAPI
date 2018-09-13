document.getElementById("btn_get_repos").addEventListener('click', () => {
    console.log('--- Start ---');
    getDate();
} );

const getDate = () =>{
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users",
        dataType: "json",
        success: function(result) {
            let tmp = '';
            let avatar = "";
            let logo = document.getElementById('logo');
            let avatarBlock = document.createElement("img");
            for( i in result ) {
                console.log(result[i].login);
                tmp = tmp + result[i].login + "<br>";
                document.getElementById('result').innerHTML = tmp;
                avatarBlock.setAttribute("src", result[i].avatar_url);
            }
            logo.appendChild(avatarBlock);
            console.log(result);  
        }
    });
};