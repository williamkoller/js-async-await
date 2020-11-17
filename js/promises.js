const bands = [
    {
        name: 'Iron Maiden'
    },
    {
        name: 'Megadeth'
    }
];

const bandList = document.getElementById('bandlist');

const getBands = () => {
    setTimeout(() => {
        let output = '';
        bands.forEach((item, idx) => {
            output += `<li>${item.name}</li>`
            bandList.innerHTML = output
        })
    }, 1000)
}

const addBand = (name) => {
    const cb = (resolve, reject) => {
        setTimeout(() => {
            bands.push({ name })
            resolve()
        }, 2000)
    }
    

    return new Promise(cb)
}

addBand('Queen')
    .then(() => {
        return addBand('AC/DC')
    })
    .then(getBands)
    .finally(() => {
        console.log('all bads added')
    })