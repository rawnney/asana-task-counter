chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === "count") {
    sendResponse(countTasks());
  }
});

const countTasks = () => {

  const columns = document.getElementsByClassName('BoardColumn');
  const nrOfTasksArray = [];

  setTimeout(() => {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const items = column.getElementsByClassName('SortableItem');
      let headerTextElement = document.getElementsByClassName('BoardColumnHeader')[i].firstElementChild;
      let count = items.length;
      if (count === 15) count = '15+';
      text = headerTextElement.innerText + ` (${count})`;
      headerTextElement.innerText = text;

      nrOfTasksArray.push(count);
    }
  }, 2000);

  return nrOfTasksArray;
};

