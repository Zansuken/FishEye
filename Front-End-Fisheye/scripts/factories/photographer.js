function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.setAttribute("href", "#")
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const tagLine = document.createElement( 'span' );
        const prices = document.createElement( 'span' );
        const localisation = city + ", " + country
        h2.textContent = name;
        h3.textContent = localisation;
        tagLine.textContent = tagline;
        prices.textContent = price + "/jour";
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(tagLine);
        article.appendChild(prices);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}