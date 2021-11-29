let knuts = 0;

function addKnut(){
    knuts += 1; 
    console.log(knuts);
    const htmlKnuts = document.getElementById("knutsTotal");
    htmlKnuts.innerText = "Knuts: " + knuts; 
}

addKnut();





