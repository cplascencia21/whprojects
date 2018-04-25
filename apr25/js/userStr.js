function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=DbAIzRTpq8AB8Gw9ctyYu6k4ghovCU5j`, githubUsers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    
    // )
    // str += evt.key;

    // console.log(str, searchBox.value);

    // // getCharacter(userSearch);
}