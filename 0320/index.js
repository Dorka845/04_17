import { QuestionType } from './quetiontype.js';
import { SelectManager } from './selectmanager.js';
import { ViewElement } from './viewelment.js';

async function init() {
    const response = await fetch('./data.json');
    const data = await response.json();

}