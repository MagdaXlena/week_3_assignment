async function fetchCookieUpgrade() {
    const cookieUpgradeInfo = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    
   const finalCookieInfo = await cookieUpgradeInfo.json();
    displayUpgrades(finalCookieInfo);
  
  }

  fetchCookieUpgrade()

    
  function displayUpgrades (arrayOfUpgrades) {
    arrayOfUpgrades.forEach(function(upgrade) {
      const name = document.createElement('p');
      const cost = document.createElement('p')
      const increase = document.createElement('p')
      const button = document.createElement('button')
      name.innerText = upgrade.name
      cost.innerText = upgrade.cost
      increase.innerText = upgrade.increase
      button.innerText = "BUY"
      console.log(upgrade)
      cookieShop.appendChild(name)
      cookieShop.appendChild(cost)
      cookieShop.appendChild(increase)
      cookieShop.appendChild(button)
      button.classList.add('buyButton')
    })
  }

  const cookieImage = document.getElementById("cookieImage");
  const count = document.getElementById("count");
  const perSecond = document.getElementById("perSecond");
  const cookieShop = document.getElementById("cookieShop");
  const cost = document.getElementById("cost");

let cookieCount = 0;
let cookiePerSecond = 1;

cookieImage.addEventListener("click", function() {
    cookieCount+=1
    updateCounts();
})

function updateCounts() {
count.innerText = cookieCount
perSecond.innerText = cookiePerSecond
}

function updateStorage() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiePerSecond", cookiePerSecond);
}

function update() {
  cookieCount+=cookiePerSecond;
  console.log(cookieCount);
  updateCounts();
  updateStorage();
}

setInterval(update, 1000);

function loadStorage() {
  if(localStorage.getItem("cookieCount") !=null && localStorage.getItem("cookiePerSecond") !=null) {
    cookieCount = JSON.parse(localStorage.getItem("cookieCount"));
    cookiePerSecond = JSON.parse(localStorage.getItem("cookiePerSecond"));
  }
}

loadStorage();


button.addEventListener("click", ()=> {
  if (cookieCount > upgrade.cost) {
    cookieCount -= upgrade.cost;
    cookiePerSecond += upgrade.increase;
    updateCounts();
  }}
)
