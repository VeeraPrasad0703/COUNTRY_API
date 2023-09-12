const country_info = document.querySelector('.country-info')

// country_info.innerHTML = `load`

const search = document.querySelector('.btn')

const getCountryInfo = (country) => {
  const url = `https://restcountries.com/v3.1/name/${country}`
  const data = fetch(url).then((response) => {
    return response.json()
  })
  data.then((data) => {
    console.log(data)
    console.log(data[0].name.common)
    const currentName = Object.values(data[0].currencies).map(
      (currency) => currency.name
    )
    country_info.innerHTML = `
    <h2>country - ${data[0].name.common}</h2>
    <h2>official - ${data[0].name.official}</h2>
    <h2>currency - ${currentName}<h2>
    <h2>capital - ${data[0].capital}</h2>
    <h2>flag - ${data[0].flag}</h2>
    <h2>map - ${data[0].maps.googleMaps}</h2>
    <img src=${data[0].flags.png} alt=${data[0].flags.alt}/>`
  })
  data.catch((error) => {
    country_info.innerHTML = `Ooops something went wrong`
  })
}

search.addEventListener('click', (e) => {
  e.preventDefault()
  country_info.innerHTML = `Wait while fetching`
  const country = document.querySelector('.country').value.trim()
  getCountryInfo(country)
})
