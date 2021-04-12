const search = () => {
    let zip = document.querySelector(".search-bar").value;
    console.log(zip);
    fetch(` https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=fS0wmzxjg7aqScd1ol16imIA5cLVIBPtenOqTXHZ`)

    const btn = document.querySelector(".button");
    btn.addEventListener("click", getweather);

}