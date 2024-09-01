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


function updateCps() {
  cookiePerSecond+=1;
  updateCounts();
}

setInterval(updateCps, 1000);


button.addEventListener("click", ()=> {
  if (cookieCount != null) {
    cookieCount -= upgrade.cost;
    cookiePerSecond += displayUpgrades.increase;
  }}
)