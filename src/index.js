import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
// delete element from incomplete list
const deleteFromIncompleteList = (target) => {
  // when add delete button delete

  document.getElementById("incomplete-list").removeChild(target);
};

// incomplete add function
const createIncompleteList = (text) => {
  // make div tag
  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);
  //alert(inputText);

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    //delete complete
    deleteFromIncompleteList(completeButton.parentNode);
    //complete add
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //todo text get
    //div init
    addTarget.textContent = null;

    //create li tag
    const li = document.createElement("li");
    li.innerText = text;
    //console.log(li);

    //create button
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.addEventListener("click", () => {
      //click complete list delete
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //get text
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);
      createIncompleteList(text);
    });

    // setting elements to child of div tag
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //add complete list
    document.getElementById("complete-list").appendChild(addTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //console.log(li);
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //incomplete list add
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
