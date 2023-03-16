//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
//ReactDOM.render(<p>Hi, my name is kiran!</p>, document.getElementById("root"))

/*ReactDOM.render(<ul>
          <li>Thing 1</li>
          <li>Thing 2</li>
          </ul>, 
          document.getElementById("root")
          ) */


// Imperative way of writing the code
/* const h1 = document.createElement("h1")
h1.textContent = "This is imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1) */

//JSX
/* ReactDOM.render(<h1 className="header">This is JSX</h1>, 
document.getElementById("root")
) */

/* const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

console.log(page)

ReactDOM.render(
  page,
  document.getElementById("root")
)

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root")) */

const page = (
  <div>
    <h1>My awesome website in React </h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable </li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById("root"))
