document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const inputs = document.querySelectorAll("input, select");
    const addTravelerBtn = document.getElementById("addTravelerBtn");
    const travelerContainer = document.getElementById("travelerContainer");
  
    let backupValues = {};
  
    function enableForm(enable) {
      inputs.forEach((input) => {
        input.disabled = !enable;
      });
  
      saveBtn.style.display = enable ? "inline-block" : "none";
      cancelBtn.style.display = enable ? "inline-block" : "none";
    }
  
    function storeBackupValues() {
      inputs.forEach((input) => {
        backupValues[input.name] = input.value;
      });
    }
  
    function restoreBackupValues() {
      inputs.forEach((input) => {
        if (backupValues[input.name] !== undefined) {
          input.value = backupValues[input.name];
        }
      });
    }
  
    editBtn.addEventListener("click", function () {
      storeBackupValues();
      enableForm(true);
    });
  
    saveBtn.addEventListener("click", function () {
      alert("Changes saved!");
      enableForm(false);
    });
  
    cancelBtn.addEventListener("click", function () {
      restoreBackupValues();
      enableForm(false);
    });
  
    addTravelerBtn.addEventListener("click", function () {
      const newTraveler = document.createElement("div");
      newTraveler.className = "traveler-info";
      newTraveler.innerHTML = `
        <strong>New Traveler</strong><br>
        <input type="text" placeholder="Traveler Name" style="margin-top: 6px;" />
        <input type="email" placeholder="Traveler Email" style="margin-top: 6px;" />
      `;
      travelerContainer.appendChild(newTraveler);
    });
  
    // Disable inputs on load
    enableForm(false);
  });
  