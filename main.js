// penkta uzduotis

const h1ND5 = document.querySelector('h1'); 

h1ND5.innerText = "Zuikio pomidoru darzas"; 

h1ND5.classList.add("pavadinimas"); 

const ingredientaiND5 = document.querySelectorAll("li");

for (let i = 0; i < ingredientaiND5.length; i++) {
    const item = ingredientaiND5[i];
    item.innerText = 'Pomidoras'; 
    console.log(item);
    item.classList.add("pomidoras");
}