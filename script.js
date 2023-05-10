
const questionEl = document.getElementById('question');
        const answerBtnsEl = document.getElementById('answer-buttons');
        const scoreEl = document.getElementById('score');
        const startBtn = document.getElementById('start-btn');

        
        let currentQuestion = 0;
        let score = 0;


        const questions = [
            {
                question: 'Qual é a capital do Brasil?',
                answers: [
                    { text: 'Rio de Janeiro', correct: false },
                    { text: 'São Paulo', correct: false },
                    { text: 'Brasília', correct: true },
                    { text: 'Belo Horizonte', correct: false }
                ]
            },
            
            {
                question: 'Quem descobriu o Brasil?',
                answers: [
                    { text: 'Cristóvão Colombo', correct: false },
                    { text: 'Pedro Álvares Cabral', correct: true },
                    { text: 'Fernão de Magalhães', correct: false },
                    { text: 'Vasco da Gama', correct: false }
                ]
            },

            {
                question: 'Barriga-verde é um gentílico para qual estado brasileiro?',
                answers: [
                    { text: 'Acre', correct: false },
                    { text: 'Maranhão', correct: false },
                    { text: 'Paraná', correct: false },
                    { text: 'Santa Catarina', correct: true }
                ]
            },

            {
                question: 'O que é paroxítona?',
                answers: [
                    { text: 'Uma substancia química', correct: false },
                    { text: 'Tipo de arvore', correct: false },
                    { text: 'palavra que possui 4 sílabas', correct: false },
                    { text: 'Palavra cujo acento tônico encontra-se na sua penúltima sílaba', correct: true }
                ]
            }

        ];

        function showQuestion() {
            const question = questions[currentQuestion];
            questionEl.innerText = question.question;
            answerBtnsEl.innerHTML = '';
            question.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('answer-btn');
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswer);
                answerBtnsEl.appendChild(button);
            });
        }

        function selectAnswer(e) {
            const selectedBtn = e.target;
            const correct = selectedBtn.dataset.correct;
            setStatusClass(document.body, correct);
            Array.from(answerBtnsEl.children).forEach(button => {
                setStatusClass(button, button.dataset.correct);
            });
            if (correct) {
                score++;
                scoreEl.innerText = score;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                startBtn.innerText = 'Reiniciar';
                startBtn.addEventListener('click', () => {
                    location.reload();
                });
            }
        }

        function setStatusClass(element, correct) {
            clearStatusClass(element);
            if (correct) {
                element.classList.add('correct');
            } else {
                element.classList.add('wrong');
            }
        }

        function clearStatusClass(element) {
            element.classList.remove('correct');
            element.classList.remove('wrong');
        }

        startBtn.addEventListener('click', showQuestion);