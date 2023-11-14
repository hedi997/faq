// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

// Fetch

const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

const dataPromise = responsePromise.then((response) => {
  return response.json();
});

const parent = document.getElementById("container");

dataPromise.then((data) => {
  console.log(data);

  data.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.className = "section";
    newDiv.textContent = item.title;

    console.log(item.title);

    newDiv.addEventListener("click", toggle);

    parent.appendChild(newDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.className = "description";
    newDiv2.textContent = item.body;

    console.log(item.body);

    parent.appendChild(newDiv2);
  });
});

// element.parentNode.insertBefore(wrapper, element);

// var titleDiv = document.createElement('div');
// titleDiv.className = 'section';
// titleDiv.textContent = item.title;

//   // Create a new div element
//   var wrapper = document.createElement('div');

//   // Add a class to the wrapper for styling (optional)
//   wrapper.className = 'wrapper';

//   // Append the wrapper before the current element
//   element.parentNode.insertBefore(wrapper, element);

// //   // Move the current element inside the wrapper
// //   wrapper.appendChild(element);
// // });
// </script>
