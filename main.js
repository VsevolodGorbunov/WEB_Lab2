import { Client, fetchRandom } from "nekos-best.js";

const nekosBest = new Client();
await nekosBest.init();

const select_png = document.getElementById('select_png')
const select_png_btn = document.getElementById('select_png_btn')
let n

select_png.addEventListener('change', event => {
    n = this.value;
})

select_png_btn.addEventListener('click', async (event) => {
  await getPng(n)
    console.log("132")
})

async function getPng(n) {
    console.log(await nekosBest.fetchRandom(n));
}