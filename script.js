const container = document.getElementById("container");

function CreateGrid(pixels = 16) {
  for (let i = 0; i < pixels * pixels; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i);
    div.setAttribute("class", "boxes");
    container.appendChild(div);
    div.addEventListener(
      "mouseover",
      () => {
        div.setAttribute("style", "background-color:white;");
      },
      false
    );
  }
}

function DeleteGrid() {
  container.innerHTML = "";
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
  let pixels = prompt("How many pixels? (Make it less than 100)");
  if (pixels < 100) {
    let width = pixels * 30 + pixels * 4;
    container.style.width = `${width}px`;
    DeleteGrid();
    CreateGrid((pixels = pixels));
  } else {
    alert("enter a valid number less than 100");
  }
});

CreateGrid();
