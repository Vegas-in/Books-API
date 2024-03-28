function paintLists(result) {
    const { results: datalists } = result;
        console.log(datalists[0].list_name);
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
                                    <button id="buttonBook${[i]}" type="button">READ MORE...</button>
                                </div>
                            </section>
                            `;

            document.getElementById("mainList").innerHTML += mainList;

        }



        /* document.getElementById("btn-next").addEventListener("click", function (event) {
           event.preventDefault();

            //LLAMAR A UNA FUNCION QUE ME RECOJA QUE LISTA SE PULSA PARA QUE ME LLEVE A OTRA PAGINA Y ME PINTE LOS LIBROS Y DEMAS 
            
        }
        });  */


}


async function getAllLists() {

    let dataset = await fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=tYEt3aM9IDtxdUoWXHjrGiMoMr0MZouB");
    let listsBooks = await dataset.json();

    console.log(listsBooks);
    return listsBooks;

}

async function runApi() {
    await getAllLists().then(result => {

        console.log(result);
        paintLists(result)
    })
};

runApi();