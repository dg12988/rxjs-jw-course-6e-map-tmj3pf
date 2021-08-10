

import { forkJoin } from "rxjs";
// Mike is from New Delhi and likes to eat pasta.

import { ajax, AjaxResponse } from "rxjs/ajax";
import { map } from "rxjs/operators";

const randomFirstName$ = ajax<any>('https://random-data-api.com/api/name/random_name').pipe(
  map(AjaxResponse => AjaxResponse.response.first_name)
);

const randomCapital$ = ajax<any>('https://random-data-api.com/api/nation/random_nation').pipe(
  map(AjaxResponse => AjaxResponse.response.capital)
);

const randomDish$ = ajax<any>('https://random-data-api.com/api/food/random_food').pipe(
  map(AjaxResponse => AjaxResponse.response.dish)
);

randomFirstName$.subscribe(value => console.log(value));
randomCapital$.subscribe(value => console.log(value));
randomDish$.subscribe(value => console.log(value));

// forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
//   ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)
// );
