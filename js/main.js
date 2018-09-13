const inputValue = 'AlexViki';
const clientId = 'Iv1.61d00f9cbaa368c9';
const clientSecret = '4f227d4712c67f9ce756ed4b2b2bac2672093d99';

document.getElementById("btn_get_repos").addEventListener('click', () => {
    console.log('2222');
    showData();
} );

const fetchUsers = async (user) => {
    const api_call = await fetch('https://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}')

    const datas = await api_call.json();

    return {data: datas}; // return {data}; 
};

const showData = () => {
    fetchUsers(inputValue).then((res) => {
        console.log(res);
    });
}