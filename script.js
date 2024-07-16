const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPounds = 2.204

const btnConvertEl = document.getElementById('converter-btn-el')
const btnCopyAllEl = document.getElementById('copy-all-el')
const btnCopyVolume = document.getElementById('output-volume-copy')
const btnCopyMass = document.getElementById('output-mass-copy')
const btnCopyLength = document.getElementById('output-length-copy')


let outputLenghEl = document.getElementById('output-length-el')
let outputVolumeEl = document.getElementById('output-volume-el')
let outputMassEl = document.getElementById('output-mass-el')

btnConvertEl.addEventListener('click', function (number) {
    const inputEl = document.getElementById('input-el').value
    if (inputEl === "") {
        alert('Debe ingresar un valor')
    }
    let EnFeets = inputEl * meterToFeet // Valor ingrasado convertido a pies y a metros
    let EnMeters = inputEl / meterToFeet

    let EnGallons = inputEl * literToGallon // Valor ingrasado convertido a galones y a litros
    let EnLiters = inputEl / literToGallon

    let EnPounds = inputEl * kilogramToPounds // Valor ingrasado convertido a pies y a metros
    let EnKilo = inputEl / kilogramToPounds

    outputLenghEl.innerHTML = `${inputEl}  meters = ${Number.parseFloat(EnFeets).toFixed(2)} feet  |||
 ${inputEl} feet = ${Number.parseFloat(EnMeters).toFixed(2)} meters`

    outputVolumeEl.innerHTML = `${inputEl}  liters = ${Number.parseFloat(EnGallons).toFixed(2)} gallons  |||
 ${inputEl} gallons = ${Number.parseFloat(EnLiters).toFixed(2)} liters`

    outputMassEl.innerHTML = `${inputEl}  kilos = ${Number.parseFloat(EnPounds).toFixed(2)} pounds  |||
 ${inputEl} pounds = ${Number.parseFloat(EnKilo).toFixed(2)} kilos`




})

