import { Client, fetchRandom } from "nekos-best.js";

const nekosBest = new Client();
await nekosBest.init();

document.addEventListener("DOMContentLoaded", () => {
    let data = [];
    let errorMessage = "";
    const spinner = document.getElementById('spinner')
    const select_png = document.getElementById('select_png')
    const error = document.getElementById('error')
    const image = document.getElementById('image')

    select_png.addEventListener('change', event => {
        n = this.value;
    })

    document.getElementById("form").addEventListener("submit", async event => {
        event.preventDefault();
        image.src = "";
        error.innerText = "";
        errorMessage = "";
        spinner.style.display = "inline";


        try {
            const response = await fetchRandom(n)
            const json = await response.json();
            data = json.items;
        }
        catch (e) {
            errorMessage = `Ошибка запроса: ${e.message}`;
        }
        finally {
            render();
        }
        spinner.style.display = "none";
    });

    function render() {
        if (errorMessage) {
            error.innerText = errorMessage;
            return;
        }

        let result = "";

        for (let item of data) {
            result += "<li>";

            if (item.results.url) {
                image.src = `${item.results.url}`;
            }
        }

        image.src = result;
    }
})


let n

select_png_btn.addEventListener('click', async (event) => {
    await getPng(n)
    console.log("132")
})

async function getPng(n) {
    console.log(await nekosBest.fetchRandom(n));
}