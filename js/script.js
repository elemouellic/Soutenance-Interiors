window.onload = function () {

    // Variables

    // Date dans le bloc
    let dateDiv1 = document.getElementById('dateDiv1')
    let dateDiv2 = document.getElementById('dateDiv2')

    // Résumé dans le bloc
    let contentDiv1 = document.getElementById('contentDiv1')
    let contentDiv2 = document.getElementById('contentDiv2')

    // Titre dans la boîte modale
    let title1 = document.getElementById('title1')
    let title2 = document.getElementById('title2')
    
    // Image dans la boîte modale
    let picture1 = document.getElementById('picture1')
    let picture2 = document.getElementById('picture2')

    // Contenu de la boîte modale 1
    let content11 = document.getElementById('content1-1')
    let content12 = document.getElementById('content1-2')

    // Contenu de la boîte modale 2
    let content21 = document.getElementById('content2-1')
    let content22 = document.getElementById('content2-2')

    //Nom de l'auteur
    let author1 = document.getElementById('author1')
    let author2 = document.getElementById('author2')

    //Date de l'article
    let date1 = document.getElementById('date1')
    let date2 = document.getElementById('date2')



    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(res => {
            console.log(res);

            if (res.ok) {
                res.json().then(data => {

                    dateDiv1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    contentDiv1.innerHTML = data.content[0]
                    title1.innerHTML = data.title
                    picture1.src = data.picture
                    author1.innerHTML = `${data.author.name} ${data.author.surname}`
                    date1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    content11.innerHTML = data.content[1]
                    content12.innerHTML = data.content[2]
                    console.log(data)
                })
            } else {
                console.log('Article non trouvé')
                res.json().then(data => console.log(data))
            }
        })
        .catch(error => {
            console.log('Erreur lors de la récupération des données depuis l\'API : ', error);
        })


    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
        .then(res => {
            console.log(res)

            if (res.ok) {
                res.json().then(data => {

                    dateDiv2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    contentDiv2.innerHTML = data.content[0]
                    title2.innerHTML = data.title
                    picture2.src = data.picture
                    author2.innerHTML = `${data.author.name} ${data.author.surname}`
                    date2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    content21.innerHTML = data.content[1]
                    content22.innerHTML = data.content[2]
                    console.log(data)
                })
            } else {
                console.log('Article non trouvé')
                res.json().then(data => console.log(data))
            }
        })
        .catch(error => {
            console.log('Erreur lors de la récupération des données depuis l\'API : ', error);
        })

}
