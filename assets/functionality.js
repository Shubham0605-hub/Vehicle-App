import vehicles from './data.js';

const list = document.querySelector(".list");
vehicles.forEach((vehicle) => {
    const item = document.createElement("btn");
    item.innerHTML = `Vehicle ID: ${vehicle.id}; Plate Number: ${vehicle.plateNo}`;
    item.classList.add("vehicle");
    item.setAttribute('id',`${vehicle.id}`);
    list.appendChild(item);
})

const btnList = document.querySelectorAll(".vehicle");
btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector(".selected")?.classList.remove('selected');
        btn.classList.add('selected');

        const map = document.querySelector('.mapFrame');

        const running_vehicle = vehicles.filter((vehicle) => vehicle.id == btn.id);

        map.setAttribute('src',running_vehicle[0].location)

        document.querySelector('.vehicleType').innerHTML = `Type: ${running_vehicle[0].type}`;
        document.querySelector('.model').innerHTML = `Model: ${running_vehicle[0].model}`;
        document.querySelector('.chassis').innerHTML = `Chassis number: ${running_vehicle[0].chassis}`;
        document.querySelector('.plate').innerHTML = `Plate number: ${running_vehicle[0].plateNo}`;
        document.querySelector('.driver').innerHTML = `Driver: ${running_vehicle[0].driver}`;

        document.querySelector('.speed').innerHTML = `Speed: ${running_vehicle[0].speed}`;
        document.querySelector('.direction').innerHTML = `Direction: ${running_vehicle[0].direction}`;
        document.querySelector('.mileage').innerHTML = `Average Mileage: ${running_vehicle[0].mileage}`;
        
    })
})

const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    vehicles.forEach((vehicle) => {
        const vehicleBtn = document.getElementById(`${vehicle.id}`);
        console.log(vehicleBtn);
        const isVisible = vehicle.plateNo.startsWith(value);
        vehicleBtn.classList.toggle("hide", !isVisible);
    })
})
