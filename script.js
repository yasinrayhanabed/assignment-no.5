
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const services = [
  { name: "National Emergency Number", number: "999", category: "All" },
  { name: "Police Helpline Number", number: "999", category: "Police" },
  { name: "Fire Service Number", number: "999", category: "Fire" },
  { name: "Ambulance Service", number: "1994-999999", category: "Health" },
  { name: "Women & Child Helpline", number: "109", category: "Women & Child" },
  { name: "Anti-Corruption Helpline", number: "106", category: "Anti-Corruption" },
  { name: "Electricity Helpline", number: "16216", category: "Electricity" },
  { name: "Brac Helpline", number: "16445", category: "NGO" },
  { name: "Bangladesh Railway Helpline", number: "163", category: "Travel" },
];

function generateCards() {
  const container = document.getElementById("cardContainer");

  services.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow relative";

    card.innerHTML = `
      <button onclick="addHeart()" class="absolute top-2 right-2 text-red-500 text-xl">💗</button>
      <h3 class="text-md font-semibold">${service.name}</h3>
      <p class="text-gray-700 text-sm">${service.number}</p>
      <span class="text-xs inline-block mt-1 bg-green-100 text-green-700 px-2 py-1 rounded">${service.category}</span>

      <div class="flex gap-2 mt-4">
        <button onclick="copyNumber('${service.number}')" class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">📋 Copy</button>
        <button onclick="makeCall('${service.name}', '${service.number}')" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">📞 Call</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function addHeart() {
  heartCount++;
  document.getElementById("heartCount").innerText = heartCount;
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Number ${number} copied to clipboard!`);
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
}

function makeCall(name, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  alert(`Calling ${name} at ${number}...`);

  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  const callTime = new Date().toLocaleTimeString();

  const historyCard = document.createElement("div");
  historyCard.className =
    "bg-white shadow-md rounded-lg p-3 mb-2 flex items-center justify-between";

  historyCard.innerHTML = `
    <div>
      <p class="font-semibold text-gray-800">${name}</p>
      <p class="text-sm text-gray-500">${number} - ${callTime}</p>
    </div>
    <span class="text-red-500 text-xl"></span>
  `;

  document.getElementById("callHistory").appendChild(historyCard);
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}




