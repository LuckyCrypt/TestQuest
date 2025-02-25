
document.addEventListener('DOMContentLoaded', function () {
    const questionsContainer = document.getElementById('questions-container');
    const addQuestionButton = document.getElementById('add-question');

    let answerIndex = 0;
    let questionIndex = 0;

    // Функция для создания элемента с несколькими ответами
    function createAnswerElementWithSeveralAnswers() {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('input-group', 'mb-3');
        answerDiv.id = `Answers_${answerIndex}_div`;

        const inputGroupText = document.createElement('div');
        inputGroupText.classList.add('input-group-text');

        const correctRadio = document.createElement('input');
        correctRadio.classList.add('form-check-input', 'mt-0', 'correct-answer');
        correctRadio.type = 'radio';
        correctRadio.name = 'correctAnswer'; // Важно: даем всем radio button одинаковое имя в рамках вопроса
        correctRadio.ariaLabel = 'Radio button for correct answer';
        correctRadio.id = `Answers_${answerIndex}_radio`;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('form-control', 'answerText');
        answerInput.ariaLabel = 'Text input for answer';

        answerInput.name = `Answers[${answerIndex}].Text`;
        answerInput.id = `Answers_${answerIndex}_Text`;

        const validationSpan = document.createElement('span');
        validationSpan.classList.add('text-danger', 'field-validation-valid');
        validationSpan.dataset.valmsgFor = `Answers[${answerIndex}].Text`;
        validationSpan.dataset.valmsgReplace = "true"; //Важно
        answerIndex++;
        inputGroupText.appendChild(correctRadio);
        answerDiv.appendChild(inputGroupText);
        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(validationSpan);

        return answerDiv;
    } questionsContainer

    // Функция для создания элемента с однми ответом
    function createAnswerElementWithOneAnswer() {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('input-group', 'mb-3');

        const inputGroupText = document.createElement('div');
        inputGroupText.classList.add('input-group-text');

        const correctRadio = document.createElement('input');
        correctRadio.classList.add('form-check-input', 'mt-0', 'correct-answer');
        correctRadio.type = 'radio';
        correctRadio.name = 'correctAnswer'; // Важно: даем всем radio button одинаковое имя в рамках вопроса
        correctRadio.ariaLabel = 'Radio button for correct answer';
        correctRadio.id = `Answers_${answerIndex}_radio`;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('form-control', 'answerText');
        answerInput.ariaLabel = 'Text input for answer';

        answerInput.name = `Answers[${answerIndex}].Text`; //  Важно:  Укажите правильное имя свойства!
        answerInput.id = `Answers_${answerIndex}_Text`;

        const validationSpan = document.createElement('span');
        validationSpan.classList.add('text-danger', 'field-validation-valid');
        validationSpan.dataset.valmsgFor = `Answers[${answerIndex}].Text`;
        validationSpan.dataset.valmsgReplace = "true"; //Важно
        answerIndex++;
        inputGroupText.appendChild(correctRadio);
        answerDiv.appendChild(inputGroupText);
        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(validationSpan);

        return answerDiv;
    } questionsContainer

    // Функция для создания элемента со свободным ответом
    function createAnswerElementWithFreeAnswer() {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('input-group', 'mb-3');

        const inputGroupText = document.createElement('div');
        inputGroupText.classList.add('input-group-text');

        const correctRadio = document.createElement('input');
        correctRadio.classList.add('form-check-input', 'mt-0', 'correct-answer');
        correctRadio.type = 'radio';
        correctRadio.name = 'correctAnswer'; // Важно: даем всем radio button одинаковое имя в рамках вопроса
        correctRadio.ariaLabel = 'Radio button for correct answer';
        correctRadio.id = `Answers_${answerIndex}_radio`;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('form-control', 'answerText');
        answerInput.ariaLabel = 'Text input for answer';

        answerInput.name = `Answers[${answerIndex}].Text`; //  Важно:  Укажите правильное имя свойства!
        answerInput.id = `Answers_${answerIndex}_Text`;

        const validationSpan = document.createElement('span');
        validationSpan.classList.add('text-danger', 'field-validation-valid');
        validationSpan.dataset.valmsgFor = `Answers[${answerIndex}].Text`;
        validationSpan.dataset.valmsgReplace = "true"; //Важно
        answerIndex++;
        inputGroupText.appendChild(correctRadio);
        answerDiv.appendChild(inputGroupText);
        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(validationSpan);

        return answerDiv;
    } questionsContainer

    // Функция для создания элемента ответа
    function CreateQuestionText() {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('mb-3');

        const lableQuestionText = document.createElement('label');
        lableQuestionText.htmlFor = 'questionsText';
        lableQuestionText.classList.add('form-label');
        lableQuestionText.textContent = 'Текст вопроса';
        lableQuestionText.id = `Questions[${questionIndex}].label`;
        const inputQuestionText = document.createElement('input');
        inputQuestionText.classList.add('form-control', 'questionText');
        inputQuestionText.type = 'text';
        inputQuestionText.placeholder = 'Введите текст вопроса';

        inputQuestionText.name = `Questions[${questionIndex}].Text`; //  Важно:  Укажите правильное имя свойства!
        inputQuestionText.id = `Questions_${questionIndex}_Text`; // Хорошо бы и ID сделать уникальным, для label и т.п.

        const validationSpan = document.createElement('span');
        validationSpan.classList.add('text-danger', 'field-validation-valid');
        validationSpan.dataset.valmsgFor = 'Questions[${questionIndex}].Text'
        validationSpan.dataset.valmsgReplace = "true"; //Важно
        questionIndex++;

        answerDiv.appendChild(lableQuestionText);
        answerDiv.appendChild(inputQuestionText);
        answerDiv.appendChild(validationSpan);
        /*
        <div class="mb-3">
        <label for="questionText" class="form-label">Текст вопроса</label>
        <input type="text" class="form-control questionText" placeholder="Введите текст вопроса">
        <span asp-validation-for="text"></span>
        </div>
        */
        return answerDiv;
    } questionsContainer

    // Функция для создания элемента вопроса
    function createQuestionElement() {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('questions-container');
        questionDiv.innerHTML = `
            ${CreateQuestionText().outerHTML}
            <h4>Варианты ответов</h4>
            <div class="answers">
                ${createAnswerElementWithSeveralAnswers().outerHTML}
                ${createAnswerElementWithSeveralAnswers().outerHTML}
            </div>
            <button type="button" class="btn btn-sm btn-secondary add-answer">Добавить ответ</button>
            <button type="button" class="btn btn-sm btn-danger remove-question">Удалить вопрос</button>
            <button type="button" class="btn btn-sm btn-danger remove-answer">Удалить ответ</button>
            <select class="dropdown-menu-dark" id="SetTypeQuestion">
                <option value="oneAnswer">Один ответ</option>
                <option value="severalAnswers">Несколько ответов</option>
                <option value="freeAnswer">Произвольный ответ</option>
            </select>
        `;
         
        // Добавляем обработчики событий для новых элементов
        const addAnswerButton = questionDiv.querySelector('.add-answer');
        addAnswerButton.addEventListener('click', function () {
            const answersContainer = questionDiv.querySelector('.answers');
            answersContainer.appendChild(createAnswerElementWithSeveralAnswers());
        });

        const removeQuestionButton = questionDiv.querySelector('.remove-question');
        removeQuestionButton.addEventListener('click', function () {
            questionDiv.remove();
        });
        const removeAnswersButton = questionDiv.querySelector('.remove-answer');
        removeAnswersButton.addEventListener('click', function () {
            document.getElementById('Answers_' + answerIndex + '_div').remove();
            answerIndex--;
        });


        //Обработчик radio button-ов для корректных ответов (нужно убедиться, что только один выбран)
        questionDiv.querySelectorAll('.correct-answer').forEach(radio => {
            radio.addEventListener('change', function () {
                questionDiv.querySelectorAll('.correct-answer').forEach(otherRadio => {
                    if (otherRadio !== radio) {
                        otherRadio.checked = false;
                    }
                });
            });
        });

        return questionDiv;
    }

    // Функция изменения состояния вопроса
    function TypeQuestionChange(value) {
        switch (value) {
            case "oneAnswer":
                event.target.parentElement.remove();
                //questionsContainer.appendChild(createQuestionElementWithOneAnswer());
                break;
            case "severalAnswers":
                event.target.parentElement.remove();
                //questionsContainer.appendChild(());
                break;
            case "freeAnswer":
                event.target.parentElement.remove();
                //questionsContainer.appendChild(createQuestionElementWithFreeAnswer());
                break;
        }
        return 0;
    }

    // Обработчик для добавления вопроса(Если быть точным это добавление объекта вопроса в DOM при нажатии на кнопку добавить вопрос )
    addQuestionButton.addEventListener('click', function () {
        questionsContainer.appendChild(createQuestionElement());
    });

    // Изначально добавляем один вопрос
    questionsContainer.appendChild(createQuestionElement());

    // Делегированный обработчик событий для удаления вопроса 
    questionsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-answer')) {
            event.target.parentElement.remove();
        }
    });

    //добавление элемента в DOM = Document Object Model (Объектная модель документа)
    const addSetTypeQuestion = document.getElementById('SetTypeQuestion');

    //Обработчик для изменения типа вопроса
    addSetTypeQuestion.addEventListener('change', function (event) {
        TypeQuestionChange(event.target.value);
    });
});