chrome.runtime.onMessage.addListener((msg, sender, /* sendResponse */ ) => {
  if (msg.text === "count") {
    // sendResponse(countTasks());
    countTasks()
  }
});

const countTasks = () => {

  const columns = document.getElementsByClassName('BoardColumnScrollableContainer-cardsList')
/*   const nrOfTasksArray = [] */

  setTimeout(() => {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i]
      let headerTextElement = document.getElementsByClassName('BoardColumnHeader')[i].firstElementChild
      let count = column.children.length - 1
      if (count === 15) count = '15+'
      text = headerTextElement.innerText + ` (${count})`
      headerTextElement.innerText = text

  /*     nrOfTasksArray.push(count) */
    }
  }, 2000)

 // return nrOfTasksArray
 return null;
};

