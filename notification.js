var users = [
    "SkyFox", "Luna7", "AceKing", "ZaraX", "Echo77", "NovaRay", "JaxR", "Kilo2", "Milo88", "ZoeZ",
    "BlazeStar", "Orion4", "Phoenix9", "StellaMoon", "Galaxy10", "AstroVibe", "CometQuest", "Nebula3", "Vega5", "Sirius8",
    "NovaPulse", "LunaRay", "StarRider", "Zenith6", "AeroKnight", "EclipseX", "Quasar7", "TitanWave", "Aurora9", "Pulsar6",
    "CosmicEcho", "StellarFlare", "MeteorRush", "AstroBlaze", "LunaNova", "OrionStar", "Celestial4", "ZenithAce", "CometFlash", "GalaxyQuest"
];

function showNotification() {
    var user = users[Math.floor(Math.random() * users.length)];
    var prize1 = images[Math.floor(Math.random() * images.length)][0];
    var prize2 = images[Math.floor(Math.random() * images.length)][0];

    var notification = document.createElement("div");
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.left = "20px";  
    notification.style.background = "#ccc29e";
    notification.style.padding = "10px"; 
    notification.style.borderRadius = "8px"; 
    notification.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; 
    notification.style.border = "1px solid white"; 
    notification.style.display = "flex";
    notification.style.alignItems = "center";
    notification.style.gap = "8px"; 
    notification.style.zIndex = "9999";
    notification.style.direction = "ltr";
    notification.style.fontSize = "12px"; 

    var text = document.createElement("span");
    text.innerHTML = `<strong>${user}</strong> Won the following rewards :`;

    var prizeImg1 = document.createElement("img");
    prizeImg1.src = prize1;
    prizeImg1.style.width = "30px"; 
    prizeImg1.style.height = "30px"; 

    var prizeImg2 = document.createElement("img");
    prizeImg2.src = prize2;
    prizeImg2.style.width = "30px"; 
    prizeImg2.style.height = "30px";

    notification.appendChild(text);
    notification.appendChild(prizeImg1);
    notification.appendChild(prizeImg2);
    document.body.appendChild(notification);

    var audio = new Audio('https://cdn.jsdelivr.net/gh/dev20l/jquery-ajax-3.7.9/mixkit-message-pop-alert-2354.mp3');
    audio.play();  

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

setInterval(showNotification, 10000);
