let searchInput = document.getElementById('searchInput')
let animeList = document.querySelectorAll('.list-group>*')

searchInput.onkeyup = (e) => {
    let search = e.target.value.toLowerCase()
    for(let i of animeList){
        let item = i.innerHTML.toLowerCase()
        if(item.indexOf(search) === -1){
            i.classList.add('d-none')
    }else{
        i.classList.remove('d-none')
    }
}}

