let newGenre = ""

function paintLists(result) {
    const { results: datalists } = result;
    console.log(datalists[0].list_name);
    document.getElementById("mainList").innerHTML = "";
    for (let i = 0; i < datalists.length; i++) {
        let mainList = `
                        <section>
                            <article>
                                <h3>${datalists[i].list_name}</h3>
                            </article>
                            <article>
                                <p>Oldest: ${datalists[i].oldest_published_date}</p>
                            </article>
                            <article>
                                <p>Newest: ${datalists[i].newest_published_date}</p>
                            </article>
                            <article>
                                <p>Updated: ${datalists[i].updated}</p>
                            </article>
                            <div>
                            <button class="buttonGenre" type="button" name="button${i}" value="${datalists[i].list_name}">READ MORE...</button>
                            </div>
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
                    <section>
                        <button id="backButton" type="button" onclick="runApi()">Back</button>
                    </section>
                    `;
    document.getElementById("mainList").innerHTML = backButton;
    for (let i = 0; i < dataBooks.length; i++) {
        let mainBooksList = `
                        <section>
                            <article>
                                <h3>#${dataBooks[i].rank} ${dataBooks[i].title}</h3>
                            </article>
                            <article>
                                <img src="${dataBooks[i].book_image}" alt="Book Image">
                            </article>
                            <article>
                                <h5>Author: ${dataBooks[i].author}</h5>
                            </article>
                            <article>
                                <p>Weeks on list: ${dataBooks[i].weeks_on_list}</p>
                            </article>
                            <article>
                                <p>Description: ${dataBooks[i].description}</p>
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