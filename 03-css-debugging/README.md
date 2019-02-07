# CSS Debugging tips and tricks

This time we will focus on debugging CSS styles when working with React.
We will hunt down a few example bugs with browser Dev Tools Inspector and identify good ways how to fix them.
Vertical alignment, flexbox, animations, responsive designs, CSS-in-JS, overwriting default library styles and other useful tips await. 

## Setup

Before workshop:
```sh
git clone https://github.com/msd-code-academy/react-workshop.git
cd react-workshop/03-css-debug/
npm i
```

At the workshop start:
```sh
git pull  # because we might do last-minute fixes
npm start
```

## Content

```sh
cd src/examples/
```
* 00 Intro
  * Using [browser inspector](https://developers.google.com/web/tools/chrome-devtools/css/) (right click > Inspect)
    * No step-by-step debug
    * So good class names are more important
    * Or at least React component names, including [HOC](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)
    * Temporary background / outline also useful
  * Know thy framework / use consistent code style to simplify search in code
  * CSS vs CSS-in-JS => hot reload vs cleaner code over time
* 01 Vertical alignment
  * Parent height
  * [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) is only for inline and table cells
  * Know thy [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (or trial & error)
* 02 Z-index
  * [Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
  * `static` content is for elements that keep to themselves
  * if they need to overlap in arbitrary ways, best to go `absolute`
  * or [`grid`](https://css-tricks.com/snippets/css/complete-guide-grid/) (order in HTML according to Z order, manual row+column for position)
* 03 Selector specificity
  * TODO
* 04 Responsive
  * TODO
* 05 Transitions
  * TODO
