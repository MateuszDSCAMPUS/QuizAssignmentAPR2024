//correct answers
let q1CorrectArray = ["green", "olive green", "vomit green"];
var q1Res;
var q2Res;
var q3Res;
var q4Res;
var q5Res;

//Runtime Code
let introH1 = document.querySelector('#introH1');
introH1.innerHTML = "Hellooo Y'all";
console.log(introH1);

document.getElementById('submitBtn').onclick = submit;

function submit(event) {
     event.preventDefault();
     let total = 0;
     let userName = document.querySelector('#username').value;
     //q1
     let q1Ans = document.querySelector('#q1').value;
     if (q1CorrectArray.includes(q1Ans.toLowerCase().trim())) {
          q1Res = "Correct";
          total++;
     }
     else {
          q1Res = "Incorrect";
     }

     //q2

     let q2Ans = document.getElementById('q2').value;
     if (q2Ans == 'mart') {
          q2Res = "Correct";
          total++;
     }
     else {
          q2Res = "Incorrect";
     }


     //q3
     let q3Ans = document.getElementById('q3').checked;

     if (q3Ans) {
          q3Res = "Correct";
          total++
     }
     else {
          q3Res = "Incorrect";
     }

     //q4
     var radioTrue = document.querySelector('input[name="q4"][value="true"]');
     var radioFalse = document.querySelector('input[name="q4"][value="false"]');

     if (radioTrue.checked) {
          q4Res = "Incorrect";
     }
     else if (radioFalse.checked) {
          q4Res = "Correct";
          total++;
     }
     else {
          q4Res = "Not Answered";
     }

     //q5
     let q5Ans = document.getElementById('q5').value;
     if (q5Ans == 'd') {
          q5Res = "Correct";
          total++;
     }
     else {
          q5Res = "Incorrect";
     }
     console.log("Submit called");
     //saveToFile(["User Name: " + userName, "Q1 " + q1Res, "Q2 " + q2Res, "Q3 " + q3Res, "Q4 " + q4Res, "Q5 " + q5Res, "Total Score: " + total], 'userInput.txt');

     displayResults(userName, q1Res, q2Res, q3Res, q4Res, q5Res, total);
}

function saveToFile(dataArray, filename) {

     console.log("Save called");
     var dataString = dataArray.join('\n');
     var dataBlob = new Blob([dataString], { type: 'text/plain' });

     var a = document.createElement('a');
     a.href = URL.createObjectURL(dataBlob);
     a.download = filename;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);

     //setTimeout(function () {
     //     document.body.removeChild(a);
     //     URL.revokeObjectURL(a.href);
     //     callback();
     //}, 100);
     //displayResults();
}

function displayResults(userName, q1Res, q2Res, q3Res, q4Res, q5Res, total) {
     let resultsData = [
       "User Name: " + userName,
       "Q1 " + q1Res + "<br><br> Officially MC's armour is 'Olive Green', but some elect to call it Vomit",
       "Q2 " + q2Res + "<br><br> Marty O'Donnell and Michael Salvatore composed all tracks until Halo 4, though Marty gets more recognition",
       "Q3 " + q3Res + "<br><br> Trick question, of course he is, and he has the most awesome religious zealot redempption arc in sci-fi, while also being done justice in later 343i titles as a main leader of the surviving Sangheli, on pplanet Sanghelios",
       "Q4 " + q4Res + "<br><br> It is uncharacteristic of John-117 to remove his helmet at any time, unless the job is done, which it never is... A face reveal is baited just before the credits of Halo: Combat Evolved, though his head is obstructed by the rims of the cockpiut of the Longsword fighter that MC and Cortana used to escape on from Launch Bay 7 of an exploding Pillar of Autumn",
       "Q5 " + q5Res  + "<br><br> The collective 7 Halos in the Array, plus the two (Greater, and Lesser) Arks, have been built by the ForeRunners, in order to starve an unstoppable, Hive-Minded, Sentient Parasite (The Flood) from spreading, by killing all life in the Galaxy, and starving the Flood, while also containing seedling samples of each species in order to repopulate. It was a crude but effective method of preventing certain doom upon all life. However, each ring could fire individually with a limited range of 25,000 Lightyears. If all were to be fired, the Lesser and Greater Arks, were positioned outside of the Galaxy, safe from the range of the Array, and held Libraries of Life for Repopulation",
       "Total Score: " + total
     ];
   
     let resultsHtml = resultsData.map(result => `<p>${result}</p>`).join('');
   
     document.getElementById('results').innerHTML = resultsHtml;
   }