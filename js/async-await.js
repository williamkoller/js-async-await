const bands = [
    {
        name: 'Iron Maiden'
    },
    {
        name: 'Megadeth'
    },
    {
      name: 'Nirvana'
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
        //resolve({ name })
        reject('unable to add')
    }, 2000)
  }
  

  return new Promise(cb)
}

const runAsyncMethods = async () => {
  try {
    await addBand('Metallica')
    await addBand('AC/DC')
    getBands()
  } catch (error) {
    console.error(error)
  }
  
}

runAsyncMethods()