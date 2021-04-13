let button1 = document.querySelector("#energy");

const body = document.querySelector(".root");

const getFuel = async () => {
  const energy = await fetch("https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=fS0wmzxjg7aqScd1ol16imIA5cLVIBPtenOqTXHZ");

  const convertedJson = await energy.json();

  console.log(convertedJson);

  const stationsInfo = document.createElement("p");

    console.log(stationsInfo);
}
button1.addEventListener("click", () => {
    getFuel();
  });
  