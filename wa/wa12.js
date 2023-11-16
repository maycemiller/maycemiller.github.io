document.querySelector('#js-new-quote').addEventListener('click', getJoke);

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
            jokeText.textContent = joke;
        }

        getJoke();

        function changeBackgroundColor() {
            // Get a random color
            var randomColor = getRandomColor();

            // Change the background color of the body
            document.body.style.backgroundColor = randomColor;
        }

        function getRandomColor() {
            // Generate a random hexadecimal color code
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        changeBackgroundColor();

