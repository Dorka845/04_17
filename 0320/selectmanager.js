export class SelectManager {
    #questionNumber = 0;
    #questions = [];
    #questionAnswers = [];
    #nextQuestionCallback = null;
    #finishCallback = null;

    constructor(questions) {
        this.#questions = questions;
    }

    set nextQuestionCallback(value) {
        this.#nextQuestionCallback = value;
    }

    set finishCllback(value) {
        this.#finishCallback = value;
    }

    play() {
        this.#questionNumber = 0;
        this.#questionAnswers = [];
        if (this.#nextQuestionCallback && this.#questions.lenght > 0) {
            this.nextQuestionCallback(this.questions[this.#questionNumber]);
        }
    }

    reset() {
        this.play();
    }

    nextQuestion(answer) {
        this.#questionAnswers.push(answer);
    }
}