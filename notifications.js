function sendNotification(person, messageString) {
    
    let notificationBox = document.createElement("div");
    notificationBox.id = "messageBox"
    let imageContainer = document.createElement("div");
    let messageContainer = document.createElement("div");
    let title = document.createElement("div");
    let message = document.createElement("div");

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");

    let profilePic;
    let icon = chrome.runtime.getURL("resources/message.png");

    let link = document.createElement("link");
    link.href = chrome.runtime.getURL("resources/style.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);

    title.innerHTML = person
    profilePic = chrome.runtime.getURL(`resources/${person}.jpg`);


    message.innerHTML = messageString


    notificationBox.classList.add("notificationBox");
    messageContainer.classList.add("messageContainer");
    imageContainer.classList.add("imageContainer");
    img1.classList.add("profilePic");
    img2.classList.add("messageIcon");
    title.classList.add("title");
    message.classList.add("message");

    img1.src = profilePic
    img2.src = icon
    imageContainer.appendChild(img1)
    imageContainer.appendChild(img2)
    messageContainer.appendChild(title)
    messageContainer.appendChild(message)
    notificationBox.appendChild(imageContainer)
    notificationBox.appendChild(messageContainer);

    (document.fullscreenElement ?? document.body).appendChild(notificationBox);

    notificationBox.classList.add("slideIn");
}

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function playMessage(person, message, duration) {
    sendNotification(person, message);
    await sleep(duration ?? 4000);
    let notificationBox = document.getElementById("messageBox");
    notificationBox.classList.add("slideOut");
    await sleep(500);
    notificationBox.remove()
  }
  
  

async function playStory(request) {
  console.log(request);
  console.log('original', Object.keys(request).length)
  console.log('updated', (Object.keys(request).length-1)/2)

  for(let i=0; i< (Object.keys(request).length-1)/2; i++){
    console.log('delay' + (i+1))
    console.log('message' + (i+1))
    await sleep(request['delay' + (i+1)]);
    playMessage(request.character,request['message' + (i+1)]);
  }
}

let initialized;
if (typeof initialized === 'undefined') {
  initialized = true;
  chrome.runtime.onMessage.addListener(function(request){
    playStory(request)
  });
}