let storyArray = document.querySelectorAll('[id*="story"]');

let story1 = storyArray[0];
let story2 = storyArray[1];
let story3 = storyArray[2];
let story4 = storyArray[3];
let story5 = storyArray[4];

let storyDIY = document.getElementById("storyDIY");

let delay1 = document.getElementById("delay1");
let delay2 = document.getElementById("delay2");
let delay3 = document.getElementById("delay3");

let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

let notification1 = document.getElementById("notification1");
let notification2 = document.getElementById("notification2");
let notification3 = document.getElementById("notification3");

let submit = document.getElementById("submit");

let character = document.getElementById("character");
let characterImage = document.getElementById('characterImage');

let addNotification = document.getElementById('addNotification');

let form = document.getElementById("form1");
let messageForm = document.getElementById("messageForm");

let notificationData = {};

let stories;

character.addEventListener('change', function() {
    characterImage.src = `resources/${this.selectedOptions[0].value}.jpg`
  })


//   async function loadStories() {
//     const response = await fetch('/resources/stories.json');
//     stories = await response.json();
//     console.log(stories); 
//     // logs [{ name: 'Joker'}, { name: 'Batman' }]
//   }

// your function
let submitted = function(event) {
    event.preventDefault();
    let notifArray = document.querySelectorAll('[id*="notification"]');
    console.log(notifArray.length);
    notificationData['character'] = document.getElementById("character").value
    for(let i =0; i<notifArray.length; i++){
        notificationData['delay' + (i+1)] = document.getElementById(['delay' + (i+1)]).value
        notificationData['message' + (i+1)] = document.getElementById(['message' + (i+1)]).value    
    }
    playStory();
    document.getElementById('main').style.display = 'none';
    document.getElementById('clickOut').style.display = 'block';
};

// attach event listener
form.addEventListener("submit", submitted, true);

// attach event listener
addNotification.addEventListener("click", add);

if (story1) {
    story1.onclick = function() {
        notification1.style.display = 'block';
        console.log(form.length)

        if(form.length < 9){
            generate(2);
            generate(3);
            
            delay1 = document.getElementById("delay1");
            delay2 = document.getElementById("delay2");
            delay3 = document.getElementById("delay3");

            message1 = document.getElementById("message1");
            message2 = document.getElementById("message2");
            message3 = document.getElementById("message3");
        }
        
        addNotification.style.display = 'none';

        character.value = 'Cassie';
        characterImage.src = `resources/Cassie.jpg`

        delay1.value = 10000;
        message1.value = 'you packed me the wrong go gurt again';

        delay2.value = 5000;
        message2.value = "you fucking idiot";

        delay3.value = 30000;
        message3.value = "but its okay i still love you";

        document.getElementById('form1').style.display = 'block';
    }
}

if (story2) {
    story2.onclick = function() {
        notification1.style.display = 'block';
        if(form.length < 9){
            generate(2);
            generate(3);

            delay1 = document.getElementById("delay1");
            delay2 = document.getElementById("delay2");
            delay3 = document.getElementById("delay3");

            message1 = document.getElementById("message1");
            message2 = document.getElementById("message2");
            message3 = document.getElementById("message3");
        }


        addNotification.style.display = 'none';

        character.value = 'Jim';
        characterImage.src = `resources/Jim.jpg`

        delay1.value = 10000;
        message1.value = "hey wanna hear a dumb joke";
        
        delay2.value = 30000;
        message2.value = "what do you get when you mix human DNA with goat DNA?";
        
        delay3.value = 5000;
        message3.value = "kicked out of the petting zoo LOL";
        document.getElementById('form1').style.display = 'block';
    }
}

if (story3) {
    story3.onclick = function() {
        notification1.style.display = 'block';

        if(document.getElementById("notification2")){
            remove("notification2");
        }

        if(document.getElementById("notification3")){
            remove("notification3");
        }

        delay1 = document.getElementById("delay1");
        message1 = document.getElementById("message1");

        addNotification.style.display = 'none';

        character.value = 'Jane';
        characterImage.src = `resources/Jane.jpg`
        message1.value = 'You stink like the tuna!';
        document.getElementById('form1').style.display = 'block';
    }
}

if (story4) {
    story4.onclick = function() {
        notification1.style.display = 'block';
        console.log(form.length)

        if(form.length < 9){
            generate(2);
            generate(3);
            
            delay1 = document.getElementById("delay1");
            delay2 = document.getElementById("delay2");
            delay3 = document.getElementById("delay3");

            message1 = document.getElementById("message1");
            message2 = document.getElementById("message2");
            message3 = document.getElementById("message3");
        }
        
        addNotification.style.display = 'none';

        character.value = 'Roberto';
        characterImage.src = `resources/Roberto.jpg`

        delay1.value = 30000;
        message1.value = 'he shat everywhere again';

        delay2.value = 5000;
        message2.value = "its so liquidy";

        delay3.value = 5000;
        message3.value = "its liek if someone blended up a kitkat";

        document.getElementById('form1').style.display = 'block';
    }
}

if (storyDIY) {
    storyDIY.onclick = function() {
        console.log("click on diy")
        notification1.style.display = 'block';
        addNotification.style.display = 'block';

        character.value = 'Jane';
        characterImage.src = `resources/Jane.jpg`
        message1.value = '';
        document.getElementById('form1').style.display = 'block';
    }
}

let reqs_id = 1;

function remove(stringID) {
let elem = document.getElementById(stringID);
  elem.remove()
}

function add() {
  reqs_id++; // increment reqs_id to get a unique ID for the new element

  generate(reqs_id);
}

function generate(num){
    console.log("generating")
    var dom = document.createElement('div');
    let final_string = `<div id="notification${num}">
    <label for="delay${num}">Time before notification ${num}:</label>
    <br>
    <select name="delay${num}" id="delay${num}">
      <option value="5000">5 Seconds</option>
      <option value="10000" selected>10 Seconds</option>
      <option value="30000">30 Seconds</option>
      <option value="60000">60 Seconds</option>
    </select>
    <br>
      <label for="message${num}">Write your message for notification ${num}:</label>
      <input type="text" id="message${num}" name="message${num}" value="" style="width: 300px;" maxlength="280"><br><br>
  </div>`
    dom.innerHTML = final_string;
	messageForm.appendChild(dom);
}

function playStory(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                files: ['notifications.js']
              }, function() {
                  console.log(notificationData)
                chrome.tabs.sendMessage(activeTab.id, notificationData);
            });
        });
}
