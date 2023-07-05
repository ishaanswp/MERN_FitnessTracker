import React, { useEffect } from "react";
import './styles/Plans.css'; // Import the CSS file

const Plans = () => {
  useEffect(() => {
    // Code for DOM manipulation and event handling

    const form = document.querySelector("form");
    const table = document.querySelector("table");
    const exerciseNameInput = document.querySelector("#exerciseName");
    const muscleGroupInput = document.querySelector("#muscleGroup");
    const setsInput = document.querySelector("#sets");
    const repsInput = document.querySelector("#reps");
    const weightInput = document.querySelector("#weight");
    const tbody = document.querySelector("tbody");
    const removeAllButton = document.querySelector(".btn-danger-all");
    const totalRepsFooter = document.querySelector("tfoot th:nth-child(3)");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the input values
      var exerciseName = exerciseNameInput.value;
      var muscleGroup = muscleGroupInput.value;
      var sets = setsInput.value;
      var reps = repsInput.value;
      var weight = weightInput.value;

      // Append a new row to the table with the input values
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${muscleGroup}</td>
        <td>${exerciseName}</td>
        <td>${reps}</td>
        <td>${sets}</td>
        <td>${weight}</td>
        <td>${calculate1RM(weight, reps)}</td>
        <td><input type="button" class="btn btn-danger" value="Remove"></td>
      `;
      tbody.appendChild(newRow);

      // Clear the input fields
      exerciseNameInput.value = "";
      muscleGroupInput.value = "";
      setsInput.value = "";
      repsInput.value = "";
      weightInput.value = "";

      // Update the total values in the table footer
      updateTotalValues();
    });

    // Remove Button Click Event
    table.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn-danger")) {
        var row = event.target.closest("tr");

        // Animate the row using custom animation
        animateRow(row, function () {
          row.remove();
          updateTotalValues();
        });
      }
    });

    // Remove All Button Click Event
    removeAllButton.addEventListener("click", function () {
      var rows = tbody.querySelectorAll("tr");

      // Animate all rows using fadeOut before removing
      rows.forEach(function (row) {
        animateRow(row, function () {
          row.remove();
        });
      });

      // Update the total values in the table footer
      updateTotalValues();
    });

    // Function to calculate 1 Rep Max (1RM)
    function calculate1RM(weight, reps) {
      // Calculation logic for 1RM
      return Math.round(weight / (1.0278 - 0.0278 * reps));
    }

    // Function to update the total values in the table footer
    function updateTotalValues() {
      var totalReps = 0;

      var rows = tbody.querySelectorAll("tr");
      rows.forEach(function (row) {
        var reps = parseInt(row.querySelector("td:nth-child(3)").textContent);
        totalReps += reps;
      });

      totalRepsFooter.textContent = totalReps;
    }

    // Function to animate a row
    function animateRow(row, callback) {
      var animationDuration = 500;
      var animationInterval = 10;
      var opacityInterval = 1 / (animationDuration / animationInterval);
      var currentOpacity = 1;

      var interval = setInterval(function () {
        currentOpacity -= opacityInterval;
        row.style.opacity = currentOpacity;

        if (currentOpacity <= 0) {
          clearInterval(interval);
          callback();
        }
      }, animationInterval);
    }
  }, []);

  return (
    <div className="plans">
    <div className="container mt-5">
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="exerciseName">Exercise Name</label>
            <input
              type="text"
              className="form-control"
              id="exerciseName"
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="muscleGroup">Muscle Group</label>
            <input
              type="text"
              className="form-control"
              id="muscleGroup"
              required
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="sets">Sets</label>
            <input
              type="number"
              className="form-control"
              id="sets"
              required
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="reps">Reps</label>
            <input
              type="number"
              className="form-control"
              id="reps"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="weight">Weight (lbs)</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              required
            />
          </div>
          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary mt-4">
              Add Exercise
            </button>
          </div>
        </div>
      </form>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Muscle Group</th>
            <th>Exercise Name</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Weight (lbs)</th>
            <th>1RM</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <th>Total Reps:</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <input
                type="button"
                className="btn btn-danger-all"
                value="Remove All"
              />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
    </div>

  );
};

export default Plans;
