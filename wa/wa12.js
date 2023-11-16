document.querySelector('#js-new-quote')
newBtn.addEventListener('click', getJoke);

        async function getJoke() {
            try {


                const response = await fetch('https://icanhazdadjoke.com/', {
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                const json = await response.json();
                displayJoke(json.joke);

            } catch (err) {
                console.log(err);
                alert('Failed to fetch new joke');

            }
        }

        function displayJoke(joke) {
            const jokeText = document.querySelector('#js-quote-text');
            changeBackgroundColor();

            jokeText.textContent = joke;
        }


        function changeBackgroundColor() {
    
            let randomColor = getRandomColor();

            document.body.style.backgroundColor = randomColor;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }



