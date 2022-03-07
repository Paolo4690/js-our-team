const eleContainer = document.querySelector('.team-container');
let arrUtenti = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }
];

// ciclo che stampa tutti gli elementi dell'array
for (let i = 0; i < arrUtenti.length; i++) {
    generateCard(arrUtenti[i].name, arrUtenti[i].role, arrUtenti[i].image);
}

//funzione che crea le card
function generateCard(name, role, image) {
    let card = `          
    <div class="team-card">
        <div class="card-image">
        <img
            src="img/${image}"
            alt=${name}"
        />
        </div>
        <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
        </div>
    </div>`;

    eleContainer.innerHTML += card;
};

// funzione che crea nuove card e aggiunge oggetti all'array
const btnAdd = document.querySelector('#addMemberButton');

btnAdd.addEventListener('click', function() {

    let eleinputName = document.querySelector('#name').value;
    let eleinputRole = document.querySelector('#role').value;
    let eleinputImg = document.querySelector('#image').value;

    const newUtenti = {    
        name: eleinputName,
        role: eleinputRole,
        image: eleinputImg
    }

    arrUtenti.push(newUtenti);

    generateCard(eleinputName, eleinputRole, eleinputImg)
});