function generatePhoneNumber() {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber; 
 }
 
 document.getElementById('js-new-quote').addEventListener('click', function() {
    document.getElementById('js-quote-text').textContent = generatePhoneNumber();
    
});

let genPhoneNumberButton = document.getElementById('gen-phone-number');

genPhoneNumberButton.addEventListener('click', function() {
  document.getElementById('js-quote-text').textContent = generatePhoneNumber();
  button.style.left = `${generateRandomPosition().x}px`;
  button.style.top = `${generateRandomPosition().y}px`;
});

let myPhoneNumberButton = document.getElementById('my-phone-number');

    myPhoneNumberButton.addEventListener('click', function() {
    document.getElementById('js-quote-text').textContent = generatePhoneNumber();
    button.style.left = `${generateRandomPosition().x}px`;
    button.style.top = `${generateRandomPosition().y}px`;
    });

 
 
 let button = document.getElementById('js-new-quote');
 
 function generateRandomPosition() {
    let x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    return {x, y};
 }
 
 
 document.getElementById('js-new-quote').addEventListener('click', function() {
    document.getElementById('js-quote-text').textContent = generatePhoneNumber();
    button.style.left = `${generateRandomPosition().x}px`;
    button.style.top = `${generateRandomPosition().y}px`;

   //  let myPhoneNumberButton = document.getElementById('my-phone-number');

   //  myPhoneNumberButton.addEventListener('click', function() {
   //  document.getElementById('js-quote-text').textContent = generatePhoneNumber();
   //  button.style.left = `${generateRandomPosition().x}px`;
   //  button.style.top = `${generateRandomPosition().y}px`;
   //  });
 });
 






// why wont the my phone # button appear? is it hidden under the generate button?


