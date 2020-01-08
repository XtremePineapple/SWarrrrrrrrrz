console.log("this is not the console you're looking for")

const galaxyFarFarAway = document.querySelector('.longTimeAgo')

console.log(galaxyFarFarAway)

const SecretMessage = "http://star-cors.herokuapp.com"

async function tractorBeam(){
    const R2D2 = await Promise.all([
        fetch(SecretMessage + '/films'),
        fetch(SecretMessage + '/people'),
        fetch(SecretMessage + '/vehicles'),
        fetch(SecretMessage + '/starships')
    ])

    const DeathStarPlans = await Promise.all(R2D2.map(function(response){return response.json()}))

    //[wars, bounties, landies, spaceies]

    console.log(DeathStarPlans)
    // console.log(wars)
    // console.log(bounties)
    // console.log(landies)
    // console.log(spaceies)
    let holocron = []
    DeathStarPlans.forEach(space => {
        holocron.push(`<div id="category">${space.results.map(parsect => {
            if(parsect.title){
                return `<div>${parsect.title}</div>`
            } else {
                return `<div>${parsect.name}</div>`
            }
        })}</div>`);
    });
    console.log(holocron)
    galaxyFarFarAway.innerHTML = holocron.join('')
    
}

tractorBeam()