function clickDrop(id) {
    let listDrop = document.getElementsByClassName('list-drop');

    listDrop[id].classList.toggle('hidden');

    for (let i = 0; i < listDrop.length; i++) {
        if (i != id) {
            listDrop[i].classList.add('hidden');
        }
    }
}

async function changeLanguage(language) {
    let languageHead = document.getElementById('languageHead');
    await fetch("{{ asset('api/locale') }}", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            language: language
        })
    }).then(
        (res) => {
            languageHead.innerHTML = language
        }
    ).catch(
        (e) => console.log(e)
    )
}

function mobileNavToggle() {
    let listUl = document.getElementById('list-ul');
    let closeImg = document.getElementById('closeImg');
    let barImg = document.getElementById('barImg');
    listUl.classList.toggle('hidden')
    closeImg.classList.toggle('hidden')
    barImg.classList.toggle('hidden')
}