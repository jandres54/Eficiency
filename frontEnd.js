let button1 = document.querySelector("#energy");
const zipInput = document.querySelector(".zipInput");
const body = document.querySelector(".root");


const container = document.querySelector(".stationcontainer")
console.log(container.length)


const getFuel = async () => {
  const energy = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=10&zip=${zipInput.value}&api_key=fS0wmzxjg7aqScd1ol16imIA5cLVIBPtenOqTXHZ`);

const convertedJson = await energy.json();


const uList = document.createElement("ul")

convertedJson.fuel_stations.forEach(element => {

    let getName = element.station_name 

  let getFuel = element.fuel_type_code

  let getPhone = element.station_phone

  let getAddress = element.street_address

    console.log(convertedJson);

  const info = ("Store name: " + getName + " " + "Fuel type: " + getFuel + " "+ "Phone number: " +getPhone + " " + "Store address: " + getAddress)
  console.log(info)

  const list = document.createElement("li")

  list.classList.add("listItem")

  list.append(info)

  console.log(info.length)
  
  uList.append(list)
});
container.append(uList)


}

button1.addEventListener("click", getFuel)




