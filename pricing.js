let button1 = document.querySelector("#energy");
const zipInput = document.querySelector(".zipInput");
const body = document.querySelector(".root");

const getFuel = async () => {
  const energy = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=10&zip=${zipInput.value}&api_key=fS0wmzxjg7aqScd1ol16imIA5cLVIBPtenOqTXHZ`);

  const convertedJson = await energy.json();

}

