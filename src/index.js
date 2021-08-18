import fetchCountries from "./fetchCountries";
import refs from "./refs";
import template from './templates/template.hbs'
import { debounce } from "debounce";
import {  defaultModules,error} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop/dist/PNotifyDesktop';

import "@pnotify/core/dist/PNotify.css" 
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/BrightTheme.css';

 
// const myError = error({
//   text: "I'm an error message."
// });

refs.input.addEventListener('input', debounce(onInputChange, 500))

const onInputChange = function (event) {
    event.preventDefault
    const inputValue = event.target.value
    console.log(inputValue);
}