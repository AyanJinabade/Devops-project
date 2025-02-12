const equipmentData = [
    { id: 1, name: "Treadmill", category: "cardio", image: "https://via.placeholder.com/300x200?text=Treadmill", description: "Ideal for cardio workouts." },
    { id: 2, name: "Dumbbells", category: "strength", image: "https://via.placeholder.com/300x200?text=Dumbbells", description: "Perfect for strength training." },
    { id: 3, name: "Yoga Mat", category: "flexibility", image: "https://via.placeholder.com/300x200?text=Yoga+Mat", description: "Essential for flexibility and stretching." },
    { id: 4, name: "Elliptical Machine", category: "cardio", image: "https://via.placeholder.com/300x200?text=Elliptical", description: "Low-impact cardio workout machine." },
    { id: 5, name: "Kettlebells", category: "strength", image: "https://via.placeholder.com/300x200?text=Kettlebells", description: "Great for strength and functional training." },
    { id: 6, name: "Resistance Bands", category: "strength", image: "https://via.placeholder.com/300x200?text=Resistance+Bands", description: "Portable equipment for strength and flexibility." }
];

const equipmentList = document.getElementById("equipment-list");

function displayEquipment(equipmentArray) {
    equipmentList.innerHTML = '';
    equipmentArray.forEach(item => {
        const equipmentItem = document.createElement("div");
        equipmentItem.classList.add("equipment-item");
        equipmentItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        equipmentList.appendChild(equipmentItem);
    });
}

function filterEquipment() {
    const category = document.getElementById("category").value;
    if (category === "all") {
        displayEquipment(equipmentData);
    } else {
        const filteredEquipment = equipmentData.filter(item => item.category === category);
        displayEquipment(filteredEquipment);
    }
}

// Initial display of all equipment
displayEquipment(equipmentData);
