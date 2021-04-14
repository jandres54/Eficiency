let button1 = document.querySelector("#energy");
const zipInput = document.querySelector(".zipInput");
const body = document.querySelector(".root");

const getFuel = async () => {
  const energy = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=10&zip=${zipInput.value}&api_key=fS0wmzxjg7aqScd1ol16imIA5cLVIBPtenOqTXHZ`);

  const convertedJson = await energy.json();

  

let getName = convertedJson.fuel_stations[0].station_name 

let getFuel = convertedJson.fuel_stations[0].fuel_type_code

let getPhone = convertedJson.fuel_stations[0].station_phone

let getAddress = convertedJson.fuel_stations[0].street_address


  console.log(convertedJson);


const info = ("Store name: " + getName + " " + "Fuel type: " + getFuel + " "+ "Phone number: " +getPhone + " " + "Store address: " + getAddress)
console.log(info)

//target the container div 
const container = document.querySelector(".stationcontainer")

//create the ul element
const uList = document.createElement("ul")
//create the list element
const list = document.createElement("li")
//append ul 
container.append(uList)
//append li
uList.append(list)

//append info
list.append(info)

}


button1.addEventListener("click", getFuel)


