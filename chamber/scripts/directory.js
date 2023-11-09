const url = "./data/members.json";
const cards = document.querySelector('#cards');

function displayProphets(prophets){
    prophets.forEach((prophet) => {
        let section = document.createElement("section")
        section.classList.add("card")
        let sectionHTML = `<h3>${prophet.name} ${prophet.lastname}</h3>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="Picture of ${prophet.name} ${prophet.lastname}"></img>`
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
    })
}


async function getProphetData(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayProphets(data.prophets);
    }
    else{
        console.error("No workie!!!")
    }
}

getProphetData()