
/**
  * fm https://frontendmasters.com/courses/rapid-app-dev/model-name-variations/
 *  https://stackblitz.com/edit/rad-name-generator-start?file=index.this
 *  知识点 reduce 如果不设置初始值,就是一开始就取两值
 * autor :jzy   
 * 2022年4月3日 下午5:18:41
 */



// import './style.css';
// import 'highlight.js/styles/tomorrow-night-bright.css';
//
// import hljs from 'highlight.js';
// import typescript from 'highlight.js/lib/languages/typescript';
//
// hljs.registerLanguage('typescript', typescript);

// STEP ONE: How do we model the models?
export interface Schema {
  model: string;
  modelPlural: string;
  nameVariations?: NameVariations;
}

export interface NameVariations {
  ref: string;
  refs: string;
  model: string;
  models: string;
  selector: string;
  selectors: string;
  modelParam?: string;
  modelsParam?: string;
}

// STEP TWO: Basic string manipulation
export const DASH = '-';
export const UNDERSCORE = '_';
export const SPACE = ' ';
export const EMPTY = '';

// casing
export const lowercase = (s) => s.toLowerCase();
export const uppercase = (s) => s.toUpperCase();
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const decapitalize = (s) => s.charAt(0).toLowerCase() + s.slice(1);
export const capitalizeWords = (s) =>
  s.split(SPACE).map(capitalize).join(SPACE);

// replacing
export const replace = (s, targ, sub) => s.split(targ).join(sub);
export const stripDashes = (s) => replace(s, DASH, SPACE);
export const stripUnderscores = (s) => replace(s, UNDERSCORE, SPACE);
export const stripSpaces = (s) => replace(s, SPACE, EMPTY);
export const addDashes = (s) => replace(s, SPACE, DASH);
export const addUnderscores = (s) => replace(s, SPACE, UNDERSCORE);

// STEP THREE: Functional programming FTW
const _pipe = (a, b) => (arg) => b(a(arg));

 // *  知识点 reduce 如果不设置初始值,就是一开始就取两值 
export const transformPipe = (...ops) => ops.reduce(_pipe);

// interlacing
export const strip = transformPipe(stripDashes, stripUnderscores);
export const startCase = transformPipe(strip, capitalizeWords);
export const pascalCase = transformPipe(startCase, stripSpaces);
export const camelCase = transformPipe(pascalCase, decapitalize);
export const kebabCase = transformPipe(strip, addDashes, lowercase);
export const snakeCase = transformPipe(strip, addUnderscores, lowercase);
export const constantCase = transformPipe(strip, addUnderscores, uppercase);

export const buildSingleParam = (v: NameVariations) => `${v.ref}: ${v.model}`;
export const buildMultiParam = (v: NameVariations) => `${v.refs}: ${v.model}[]`;

// /* NOTE: We need to generate something that looks like this
// {
//   "model": "user-course",
//   "modelPlural": "user-courses",
//   "variations": {
//     "ref": "userCourse",
//     "refs": "userCourses",
//     "model": "UserCourse",
//     "models": "UserCourses",
//     "selector": "user-course",
//     "selectors": "user-courses",
//     "singleParam": "userCourse: UserCourse",
//     "multiParam": "userCourses: UserCourse[]"
//   }
// }
// */

// CHALLENGE: How do we build out the base variation?
export const buildBase = (schema: Schema): NameVariations => ({
  ref: camelCase(schema.model),
  refs: camelCase(schema.modelPlural),
  model: pascalCase(schema.model),
  models: pascalCase(schema.modelPlural),
  selector: kebabCase(schema.modelPlural),
  selectors: kebabCase(schema.modelPlural),
});

// CHALLENGE: How do we add params to the base variaition?
export const addParams = (variations: NameVariations) => ({
  ...variations,
  singleParam:buildSingleParam(variations),
  multiParam:buildMultiParam(variations)

});


export const build = transformPipe(buildBase, addParams);
//
// // STEP FOUR: Demonstration
const _schema: Schema = {
  model: 'user-course',
  modelPlural: 'user-courses',
};
//
// // placing
const variations = build(_schema);
const schema: Schema = Object.assign({}, _schema, { variations });
//
// // tracing
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `
// <h2>Model Name Variations</h2>
// <pre>
// <code class="language-typescript">${JSON.stringify(schema, null, 2)}</code>  
// </pre>
// `;

// hljs.highlightAll();

