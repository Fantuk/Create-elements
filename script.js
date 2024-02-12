// const root = document.getElementById("root");

// root.innerHTML = `<h1>Hello, world!</h1>`;

// root.style.backgroundColor = "green";
// root.style = 'background-color: red';
// root.style.setProperty('border-radius', '100px');

// const myText = "Cool";

// const newObject = document.createElement('div');

// newObject.innerHTML = `This is a new object ${myText}`;

// newObject.classList.add("card");
// root.appendChild(newObject);

// const root = document.getElementById('root');
// const input = document.getElementById('textPlace');
// const button = document.getElementById('btn');



// const cardCreate = (text) =>
// {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = text;

//     root.appendChild(card);
// }

// button.addEventListener('click', () =>{
//     const text = input.value

//     cardCreate(text);
// });

// const root = document.getElementById('root');



// data.map(car => {
//     const card = document.createElement('div');
//     card.classList.add('card');

//     const carDescription = document.createElement('p');   

//     carDescription.innerHTML = car.description;
//     carDescription.classList.add('hide');
    
//     card.innerHTML = `<h2>${car.mark}</h2><h2>${car.model}</h2>`;
    
    
//     card.addEventListener('click', () =>
//     {
//         carDescription.classList.toggle("active");
//     })

//     card.appendChild(carDescription);
//     root.appendChild(card);
// })

data = [
    {
        mark : "Subaru",
        model : "Forester",
        description : "Some log description about Subaru Forester"
    },

    {
        mark : "Toyota",
        model : "Camry",
        description : "Some log description about Toyota Camry"
    }
]

const createCard = (data) =>
{
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
        <h2>${data.mark}</h2>
        <h3>${data.model}</h3>`

    const newDescription = document.createElement('div');
    newDescription.classList.add('description');
    newDescription.innerHTML = `
        <div class="inner">
            <div>${data.description}</div>
        </div>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delbtn');
    deleteBtn.innerHTML = `Delete card`

    newCard.appendChild(newDescription);
    newCard.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (ev)=>
    {
        newCard.classList.toggle('delete');
        ev.stopPropagation();
    });

    newCard.addEventListener('click', ()=>{
        newDescription.classList.toggle('active');
        console.log('Hello');
    });

    

    return newCard
}

const root = document.getElementById("root");

data.map(el => {
    const newCard = createCard(el);
    root.appendChild(newCard);
    root.prepend(newCard);
});