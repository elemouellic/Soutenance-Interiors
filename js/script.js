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


    //Nom de l'auteur
    let author1 = document.getElementById('author1')
    let author2 = document.getElementById('author2')

    //Date de l'article
    let date1 = document.getElementById('date1')
    let date2 = document.getElementById('date2')

    //Article aléatoire

    function randomNumber() {
        let num1, num2
        do {
            num1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1
            num2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1
        } while (num1 === num2)
        return [num1, num2]
    }
    
    let [articlenumber1, articlenumber2] = randomNumber()




    fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articlenumber1}`)
        .then(res => {
            console.log(res)

            if (res.ok) {
                res.json().then(data => {
                    let tab = data.content
                    modal = tab[0]
                    let subString = modal.substring(0,150)
                    contentDiv1.innerHTML = subString + "..."

                    dateDiv1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    title1.innerHTML = data.title
                    picture1.src = data.picture
                    author1.innerHTML = `${data.author.name} ${data.author.surname}`
                    date1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`

                    // Boucle de tri pour le nombre de paragraphe
                    tab.forEach(function (item) {
                        let parent = document.getElementById("api1")
                        let p = document.createElement("p")
                        p.innerHTML = item

                        parent.appendChild(p)

                    })
                    console.log(data)
                })
            } else {
                console.log('Article non trouvé')
                res.json().then(data => console.log(data))
            }
        })
        .catch(error => {
            console.log('Erreur lors de la récupération des données depuis l\'API : ', error)
        })


        fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articlenumber2}`)
        .then(res => {
            console.log(res);

            if (res.ok) {
                res.json().then(data => {
                    let tab = data.content;
                    modal = tab[0]
                    let subString = modal.substring(0,150)
                    contentDiv2.innerHTML = subString + "..."

                    dateDiv2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    title2.innerHTML = data.title
                    picture2.src = data.picture
                    author2.innerHTML = `${data.author.name} ${data.author.surname}`
                    date2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`

                    // Boucle de tri pour le nombre de paragraphe
                    tab.forEach(function (item) {
                        let parent = document.getElementById("api2")
                        let p = document.createElement("p")
                        p.innerHTML = item

                        parent.appendChild(p)

                    });
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
