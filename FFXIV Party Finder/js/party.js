const tanks = [
    {name: "Warrior", url: './img/war.png'}, 
    {name: "Paladin", url: './img/pld.png'}, 
    {name: "Dark Knight", url: './img/dkn.png'}, 
    {name:"Gunbreaker", url: './img/gnb.png'}
];

const healers = [
    {name: "White Mage", url: './img/whm.png'}, 
    {name: "Astrologian", url: './img/ast.png'}, 
    {name: "Scholar", url: './img/sch.png'}, 
];

const meleeDps = [
    {name: "Monk", url: './img/mnk.png'}, 
    {name: "Dragoon", url: './img/dgn.png'}, 
    {name: "Ninja", url: './img/njn.png'}, 
    {name: "Samurai", url: './img/smr.png'}, 
];

const rangeDps = [
    {name: "Bard", url: './img/brd.png'}, 
    {name: "Machinist", url: './img/mch.png'}, 
    {name: "Dancer", url: './img/dnc.png'}, 
];

const magicDps = [
    {name: "Summoner", url: './img/smn.png'}, 
    {name: "Black Mage", url: './img/blm.png'}, 
    {name: "Red Mage", url: './img/rdm.png'}, 
    {name: "Blue Mage", url: './img/blu.png'}, 
];

const dps = meleeDps.concat(rangeDps.concat(magicDps))
const jobs = dps.concat(tanks, healers);

function randomJob() {
    return jobs[Math.floor(Math.random() * jobs.length)];
}

function randomTank() {
    return tanks[Math.floor(Math.random() * tanks.length)];
} 

function randomHealer() {
    return healers[Math.floor(Math.random() * healers.length)];
} 

function randomDps() {
    return dps[Math.floor(Math.random() * dps.length)];
}


const potd = document.getElementById('potd-btn')

potd.addEventListener("click", () => {

    let potdResult = document.querySelectorAll('.potd-result img');
    console.log(potdResult)
    
    for (let i=0; i < potdResult.length; i++) {
        potdResult[i].src = randomJob().url;
        potdResult[i].classList.remove('hidden');
    }
})

const lightParty = document.getElementById('light-btn')

lightParty.addEventListener("click", () => {
    let lightResult = document.querySelectorAll('.light-result img');

    for (let i =0; i < lightResult.length; i++) {
        if(i == 0) {
            lightResult[i].src = randomTank().url;
            lightResult[i].classList.remove('hidden')
        } else if (i == 1) {
            lightResult[i].src = randomHealer().url;
            lightResult[i].classList.remove('hidden')
        } else if (i > 1) {
            lightResult[i].src = randomDps().url;
            lightResult[i].classList.remove('hidden')
        }
    }
})

const fullParty = document.getElementById('full-btn')

fullParty.addEventListener("click", () => {
    let fullResult = document.querySelectorAll('.full-result img');

    for (let i =0; i < fullResult.length; i++) {
        if(i <= 1) {
            fullResult[i].src = randomTank().url;
            fullResult[i].classList.remove('hidden')
        } else if (i <= 3) {
            fullResult[i].src = randomHealer().url;
            fullResult[i].classList.remove('hidden')
        } else if (i > 3) {
            fullResult[i].src = randomDps().url;
            fullResult[i].classList.remove('hidden')
        }
    }
})
