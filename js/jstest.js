window.onload = function () {
    let dateDiv2 = document.getElementById('dateDiv2')
    let contentDiv2 = document.getElementById('contentDiv2')
    let title2 = document.getElementById('title2')
    let picture2 = document.getElementById('picture2')
    let author2 = document.getElementById('author2')
    let content2 = document.getElementById('content2')
    let date2 = document.getElementById('date2')


    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=3')
        .then(res => {
            console.log(res);

            if (res.ok) {
                res.json().then(data => {
                    // contenu des jombotrons "dernières news"
                    dateDiv2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    contentDiv2.innerHTML = data.content[0]
                    console.log(data)
                    // contenu de la boîte modale
                    title2.innerHTML = data.title
                    picture2.src = data.picture
                    author2.innerHTML = `${data.author.name} ${data.author.surname}`
                    date2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    content2.innerHTML = data.content[0]
                })
            } else {
                console.log('ERREUR D\'API');
                res.json().then(data => console.log(data))
            }
        })

};
