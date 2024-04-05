let newGenre = ""

function paintLists(result) {
    const { results: datalists } = result;
    console.log(datalists[0].list_name);
    document.getElementById("mainList").innerHTML = "";
    for (let i = 0; i < datalists.length; i++) {
        let mainList = `
                        <section class="contList">
                            <article>
                                <h3 class="titleList">${datalists[i].list_name}</h3>
                                <p class="textAtr">Oldest: ${datalists[i].oldest_published_date}</p>
                                <p class="textAtr">Newest: ${datalists[i].newest_published_date}</p>
                                <p class="textAtr">Updated: ${datalists[i].updated}</p>
                                <button class="buttonGenre" type="button" value="${datalists[i].list_name}">READ MORE...</button>
                            </article>
                        </section>
                        `;

        document.getElementById("mainList").innerHTML += mainList;

    }

    let arrayButtons = document.querySelectorAll("button")

    arrayButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
        
        newGenre = event.target.value;
        console.log(newGenre);

        getAllBooks(newGenre)

        return newGenre;

    })});
}

function paintBooks(result) {
    const { books: dataBooks } = result.results;
    console.log(dataBooks);
    document.getElementById("mainList").innerHTML = "";
    window.scrollTo(0, 0);
    let backButton = `
                    <section id="contBackButton">
                        <button id="backButton" type="button" onclick="runApi()">BACK</button>
                    </section>
                    `;
    document.getElementById("divBackButton").innerHTML = backButton;
    for (let i = 0; i < dataBooks.length; i++) {
        let mainBooksList = `
                        <section class="contBooks">
                            <div class="contRankTitle">
                                <article class="contRank">
                                    <p class="rank">#${dataBooks[i].rank}</p>
                                </article>
                                <article id="contTitleBook">
                                    <h3 class="titleBook"> ${dataBooks[i].title}</h3>
                                </article>
                            </div>
                            <article id="contBookImg">
                                <img id="bookImg" src="${dataBooks[i].book_image}" alt="${dataBooks[i].book_image}">
                            </article>
                            <article>
                                <h4><b>Author:</b> ${dataBooks[i].author}</h5>
                            </article>
                            <article>
                                <p><b>Weeks on list:</b> ${dataBooks[i].weeks_on_list}</p>
                            </article>
                            <article>
                                <p class="descriptionBook"><b>Description:</b> ${dataBooks[i].description}</p>
                            </article>
                            <div>
                            <a href="${dataBooks[i].amazon_product_url}" target="_blank" rel="noopener noreferrer">
                            <button class="AmazonProduct" type="button" value="${dataBooks[i].amazon_product_url}">BUY AT AMAZON</button>
                            </a>
                            </div>
                        </section>
                        `;

        document.getElementById("mainList").innerHTML += mainBooksList;
        
    }

}

async function getAllLists() {

    let dataset = await fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=tYEt3aM9IDtxdUoWXHjrGiMoMr0MZouB");
    let listsGenres = await dataset.json();

    console.log(listsGenres);
    return listsGenres;

}

async function getAllBooks() {

    let dataset = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${newGenre}.json?api-key=tYEt3aM9IDtxdUoWXHjrGiMoMr0MZouB`);
    let listsBooks = await dataset.json();

    console.log(listsBooks);

    paintBooks(listsBooks)
}

async function runApi() {
    await getAllLists().then(result => {
        console.log(result);
        paintLists(result)
    });
   
};

runApi();