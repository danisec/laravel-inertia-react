import{j as e}from"./app-69b0f5f9.js";function i(r){var n,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(n=0;n<r.length;n++)r[n]&&(o=i(r[n]))&&(t&&(t+=" "),t+=o);else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function s(){for(var r,n,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(n=i(r))&&(t&&(t+=" "),t+=n);return t}function l(){return e.jsx("div",{children:e.jsx("h1",{className:s("bg-indigo-600 text-white","rounded-full"),children:"Hello World!"})})}export{l as default};