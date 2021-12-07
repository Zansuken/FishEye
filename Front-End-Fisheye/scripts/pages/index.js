   async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        class Photographer {
            constructor(name, id, city, country, tagline, price, portrait) {
                this.name = name;
                this.id = id;
                this.city = city;
                this.country = country;
                this.tagline = tagline;
                this.price = price;
                this.portrait = portrait;
            }
        }
        const photographers = []
        const datas = fetch("./data/photographers.json")
        .then(res => res.json())
        .then( function(data) {
            for (const photograph of data.photographers) {
                photographers.push(photograph)
            }
            return photographers
        })
        .catch(err => console.log(err))
        console.log(photographers);

        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    