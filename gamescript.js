const minNum = 1;
        const maxNum = 100;
        const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

        let attempts = 0;

        function checkGuess() {
            let guessInput = document.getElementById('guess');
            let guess = parseInt(guessInput.value);

            if(isNaN(guess) || guess < minNum || guess > maxNum) {
                document.getElementById('result').innerHTML = `Please enter a valid number between ${minNum} - ${maxNum}`;
            } else {
                attempts++;

                if(guess < answer){
                    document.getElementById('result').innerHTML = `TOO LOW!! TRY AGAIN!!!`;
                } else if(guess > answer){
                    document.getElementById('result').innerHTML = `TOO HIGH!! TRY AGAIN!!!`;
                } else {
                    document.getElementById('result').innerHTML = `CONGRATULATIONS!! The answer was ${answer}. It took you ${attempts} attempts.`;
                    guessInput.disabled = true; // Disable input after correct guess
                }
            }
        }
        function clearbtn(){
            document.getElementById('guess').value = "";
            document.getElementById('result').innerHTML = "";
        }