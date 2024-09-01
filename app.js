async function fetchCookieUpgrade() {
    const cookieUpgradeInfo = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    
   const finalCookieInfo = await cookieUpgradeInfo.json();
    displayUpgrades(finalCookieInfo);
  
  }

  fetchCookieUpgrade()

    
  function displayUpgrades (arrayOfUpgrades) {
    arrayOfUpgrades.forEach(function(upgrade) {
      const name = document.createElement('div');
      name.innerText = upgrade.name
      console.log(upgrade)
      cookieShop.appendChild(name)
      
    })
  }

  const cookieImage = document.getElementById("cookieImage");
  const count = document.getElementById("count");
  const perSecond = document.getElementById("perSecond");
  const cookieShop = document.getElementById("cookieShop");

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

