let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let delay1 = document.getElementById("delay1");
let delay2 = document.getElementById("delay2");
let delay3 = document.getElementById("delay3");

let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

let submit = document.getElementById("submit");

let character = document.getElementById("character");
let characterImage = document.getElementById('characterImage');

let form = document.getElementById("form1");

character.addEventListener('change', function() {
    characterImage.src = `resources/${this.selectedOptions[0].value}.jpg`
  })

// your function
let submitted = function(event) {
    event.preventDefault();
    console.log("Playing Story");
    playStory();
    document.getElementById('main').style.display = 'none';
    document.getElementById('clickOut').style.display = 'block';
};

// attach event listener
form.addEventListener("submit", submitted, true);

if (text1) {
    text1.onclick = function() {
        character.value = 'Cassie';
        characterImage.src = `resources/Cassie.jpg`

        delay1.value = 10;
        message1.value = 'you packed me the wrong go gurt again';

        delay2.value = 5;
        message2.value = "you fucking idiot";

        delay3.value = 30;
        message3.value = "i hate you";

        document.getElementById('form1').style.display = 'block';
        // playStory(1);
    }
}

if (text2) {
    text2.onclick = function() {
        character.value = 'Jim';
        characterImage.src = `resources/Jim.jpg`

        delay1.value = 10;
        message1.value = "hey wanna hear a dumb joke";
        
        delay2.value = 30;
        message2.value = "what do you get when you mix human DNA with goat DNA?";
        
        delay3.value = 5;
        message3.value = "kicked out of the petting zoo LOL";
        document.getElementById('form1').style.display = 'block';
    }
}

if (text3) {
    text3.onclick = function() {
        character.value = 'Jane';
        characterImage.src = `resources/Jane.jpg`
        message1.value = '';
        message2.value = '';
        message3.value = '';
        document.getElementById('form1').style.display = 'block';
    }
}

function playStory(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                files: ['notifications.js']
              }, function() {
                chrome.tabs.sendMessage(activeTab.id, {
                    "character": character.value,
                    "delay1": delay1.value*1000,
                    "delay2": delay2.value*1000,
                    "delay3": delay3.value*1000,
                    "message1": message1.value,
                    "message2": message2.value,
                    "message3": message3.value,
                });
            });
        });
}
