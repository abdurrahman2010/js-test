// document.getElementById('add-task').addEventListener('click', function() {
//     let taskText = document.getElementById('new-task').value;
//     if (taskText === '') {
//         alert('Пожалуйста, введите задание.');
//         return;
//     }

//     let li = document.createElement('li');
//     li.textContent = taskText;

//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Удалить';
//     deleteButton.addEventListener('click', function() {
//         li.remove();
//     });

//     li.appendChild(deleteButton);
//     document.getElementById('task-list').appendChild(li);

//     document.getElementById('new-task').value = '';
// });

// const parent = document.querySelector(".parent")

// const textConteainer = document.createElement("div");
// textConteainer.textContent = "Hello world!";
// textConteainer.classList.add("englsh_text")
// // textConteainer.style.backgroundColor = "red"
// document.body.appendChild(textConteainer);


document.addEventListener('DOMContentLoaded', function() {
    const cardsData = [
        {
            imgSrc: "https://th.bing.com/th/id/OIP.nNLnrFYynH_xV5htStgbngHaFo?rs=1&pid=ImgDetMain",
            title: 'шырша',
            price: 15000,
        },
        {
            imgSrc: 'https://illady.ru/wp-content/uploads/2020/04/sa2-8.jpg',
            title: 'жарык',
            price: 3900 
        },
        {
            imgSrc: 'https://th.bing.com/th/id/R.d84d793e8ab8757c820095a165afa985?rik=Rb8MfGP264fWZA&pid=ImgRaw&r=0',
            title: 'от шашу',
            price: 10000
        }
    ];

    const cardsContainer = document.querySelector('.cards');

    function createCard(cardData) {
        const cardElement = document.createElement('div');
        cardElement.className = "card";

        const imgElement = document.createElement('img');
        imgElement.src = cardData.imgSrc;
        cardElement.appendChild(imgElement);

        const titleElement = document.createElement('h2');
        titleElement.textContent = cardData.title;
        cardElement.appendChild(titleElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = cardData.price + ' tg';
        cardElement.appendChild(priceElement);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Саттып алу';
        cardElement.appendChild(buttonElement);

        cardsContainer.appendChild(cardElement);
    }

    cardsData.forEach(createCard);
});


card.innerHtml = `
img src="$`