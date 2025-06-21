const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
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
