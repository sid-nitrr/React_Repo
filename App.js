const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone from React!"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading2"
);
const conatiner = React.createElement(
  "div",
  {
    id: "conatiner",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(conatiner);
