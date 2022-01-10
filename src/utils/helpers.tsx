export const isOdd = num => num % 2 === 1;

// TODO: Make more specific
export const getTechIcons = (array: Array<any>) => {
  const obj = {
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    sass: "devicon-sass-original",
    javascript: "devicon-javascript-plain",
    react: "devicon-react-original",
    redux: "devicon-redux-original",
    typescript: "devicon-typescript-plain",
    next: "devicon-nextjs-original",
    gatsby: "devicon-gatsby-plain",
    node: "devicon-nodejs-plain",
    git: "devicon-git-plain",
    d3: "devicon-d3js-plain",
    webpack: "devicon-webpack-plain",
    firebase: "devicon-firebase-plain",
  };

  return array.map(item => obj[item]);
};
