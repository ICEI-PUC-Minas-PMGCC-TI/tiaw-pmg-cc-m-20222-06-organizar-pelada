var calendar = document.getElementById("calendar-table");
var gridTable = document.getElementById("table-body");
var currentDate = new Date();
var selectedDate = currentDate;
var selectedDayBlock = null;
var globalEventObj = {};
var sidebar = document.getElementById("sidebar");


//cria o calendario
function createCalendar(date, side) {
   var currentDate = date;
   var startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

   var monthTitle = document.getElementById("month-name");
   var monthName = currentDate.toLocaleString("pt-BR", {
      month: "long"
   });
   var yearNum = currentDate.toLocaleString("pt-BR", {
      year: "numeric"
   });
   monthTitle.innerHTML = `${monthName} ${yearNum}`;

   if (side == "left") {
      gridTable.className = "animated fadeOutRight";
   } else {
      gridTable.className = "animated fadeOutLeft";
   }

   setTimeout(() => {
      gridTable.innerHTML = "";

      var newTr = document.createElement("div");
      newTr.className = "row";
      var currentTr = gridTable.appendChild(newTr);

      for (let i = 1; i < startDate.getDay(); i++) {
         let emptyDivCol = document.createElement("div");
         emptyDivCol.className = "col empty-day zerado";
         currentTr.appendChild(emptyDivCol);
      }

      var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      lastDay = lastDay.getDate();

      for (let i = 1; i <= lastDay; i++) {
         if (currentTr.children.length >= 7) {
            currentTr = gridTable.appendChild(addNewRow());
         }
         let currentDay = document.createElement("div");
         currentDay.className = "col grande";
         if (selectedDayBlock == null && i == currentDate.getDate() || selectedDate.toDateString() == new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString()) {
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

            document.getElementById("eventDayName").innerHTML = selectedDate.toLocaleString("pt-BR", {
               month: "long",
               day: "numeric",
               year: "numeric"
            });

            selectedDayBlock = currentDay;
            setTimeout(() => {
               currentDay.classList.add("corzinha");
            }, 900);
         }
         if (i < 10) {
            currentDay.className = 'col pequeno';
            currentDay.innerHTML = i;
         }
         currentDay.innerHTML = i;
         currentTr.appendChild(currentDay);
      }






      for (let i = currentTr.getElementsByTagName("div").length; i < 7; i++) {
         let emptyDivCol = document.createElement("div");
         emptyDivCol.className = "col empty-day";
         currentTr.appendChild(emptyDivCol);
      }

      if (side == "left") {
         gridTable.className = "animated fadeInLeft";
      } else {
         gridTable.className = "animated fadeInRight";
      }

      function addNewRow() {
         let node = document.createElement("div");
         node.className = "row";
         return node;
      }

   }, !side ? 0 : 270);
}

createCalendar(currentDate);
//acaba o calendario





//puxa o nome do dia de hj
var todayDayName = document.getElementById("todayDayName");
todayDayName.innerHTML = "Hoje é " + currentDate.toLocaleString("pt-BR", {
   weekday: "long",
   day: "numeric",
   month: "short"
});

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");




//troca o mes
prevButton.onclick = function changeMonthPrev() {
   currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
   createCalendar(currentDate, "left");
}
nextButton.onclick = function changeMonthNext() {
   currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
   createCalendar(currentDate, "right");
}




//adiciona evento
function addEvent(title, desc) {
   if (!globalEventObj[selectedDate.toDateString()]) {
      globalEventObj[selectedDate.toDateString()] = {};

   }
   globalEventObj[selectedDate.toDateString()][title] = desc;
}













//mostra o evento na barra lateral
function showEvents() {
   let eventsCount = 0;
   var sidebarEvents = document.getElementById("sidebarEvents");
   let objWithDate = globalEventObj[selectedDate.toDateString()];

   sidebarEvents.innerHTML = "";




   if (objWithDate) {
      for (key in globalEventObj[selectedDate.toDateString()]) {
         let eventContainer = document.createElement("div");
         eventContainer.className = "eventCard";

         let eventHeader = document.createElement("div");
         eventHeader.className = "eventCard-header";

         let eventDescription = document.createElement("div");
         eventDescription.className = "eventCard-description";


         eventHeader.appendChild(document.createTextNode(key));
         eventContainer.appendChild(eventHeader);
         eventHeader.addEventListener('click', () => handleClick(eventHeader));

         eventDescription.appendChild(document.createTextNode(objWithDate[key]));
         eventContainer.appendChild(eventDescription);
         let markWrapper = document.createElement("div");
         markWrapper.className = "eventCard-mark-wrapper";

        
         eventContainer.appendChild(markWrapper);
         markWrapper.addEventListener('click', (eventContainer) => handleDeleteClick(key));

         const deleteItem = document.createElement('i');
         deleteItem.classList.add('far');
         deleteItem.classList.add('fa-trash-alt');
         deleteItem.classList.add('deleteButton');

         markWrapper.appendChild(deleteItem)
         sidebarEvents.appendChild(eventContainer);

         eventsCount++;
      }
      let emptyFormMessage = document.getElementById("emptyFormTitle");
      emptyFormMessage.innerHTML = `${eventsCount} Pelada para hoje.`;
   }

   if (eventsCount == 0) {
      let emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-message";
      emptyMessage.innerHTML = "Nenhuma Pelada marcada para hoje.";
      sidebarEvents.appendChild(emptyMessage);
      let emptyFormMessage = document.getElementById("emptyFormTitle");
      emptyFormMessage.innerHTML = "Nenhuma Pelada.";
   }
}

const handleClick = (eventHeader) => {
   let tasks = sidebarEvents.childNodes;
   for (let task of tasks) {
      if (task.firstChild.isSameNode(eventHeader)) {
         task.firstChild.classList.toggle("completed");
      }
   }
}
const handleDeleteClick = (trenzim) => {
   let teste = selectedDate.toDateString();
         delete  globalEventObj[teste][trenzim];
         localStorage.globalEventObj = JSON.stringify(globalEventObj);
         showEvents();
      
}


//muda o dia
gridTable.onclick = function (e) {

   if (!e.target.classList.contains("col") || e.target.classList.contains("empty-day")) {
      return;
   }

   if (selectedDayBlock) {
      if (selectedDayBlock.classList.contains("corzinha")) {
         selectedDayBlock.classList.remove("corzinha");
      }
   }
   selectedDayBlock = e.target;
   selectedDayBlock.classList.add("corzinha");

   selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(e.target.innerHTML));
   showEvents();
   document.getElementById("eventDayName").innerHTML = selectedDate.toLocaleString("pt-BR", {
      month: "long",
      day: "numeric",
      year: "numeric"
   });

}



//adicionar ou cancelar
var changeFormButton = document.getElementById("changeFormButton");
var addForm = document.getElementById("addForm");
changeFormButton.onclick = function (e) {
   addForm.style.top = 0;
}


//botao de cancelar
var cancelAdd = document.getElementById("cancelAdd");
cancelAdd.onclick = function (e) {
   addForm.style.top = "100%";
   let inputs = addForm.getElementsByTagName("input");
   for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
   }
   let labels = addForm.getElementsByTagName("label");
   for (let i = 0; i < labels.length; i++) {
      labels[i].className = "";
   }
}




//evento de adicionar
var addEventButton = document.getElementById("addEventButton");
addEventButton.onclick = function (e) {
   let title = document.getElementById("eventTitleInput").value.trim();
   let desc = document.getElementById("eventDescInput").value.trim();



   if (!title || !desc) {
      document.getElementById("eventTitleInput").value = "";
      document.getElementById("eventDescInput").value = "";
      let labels = addForm.getElementsByTagName("label");
      for (let i = 0; i < labels.length; i++) {
         labels[i].className = "";
      }
      return;
   }

   addEvent(title, desc);

   if (!selectedDayBlock.querySelector(".day-mark")) {
      selectedDayBlock.appendChild(document.createElement("div")).className = "day-mark";
   }

   let inputs = addForm.getElementsByTagName("input");
   for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
   }
   let labels = addForm.getElementsByTagName("label");
   for (let i = 0; i < labels.length; i++) {
      labels[i].className = "";
   }
   showEvents();

   localStorage.globalEventObj = JSON.stringify(globalEventObj);

}
onload = () => {
   if (localStorage.globalEventObj) {
      globalEventObj = JSON.parse(localStorage.globalEventObj);
      showEvents();
   }
}