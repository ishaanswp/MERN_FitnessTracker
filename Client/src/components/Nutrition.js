import React, { useState } from 'react';
import './styles/Nutrition.css'; // Import the CSS file

function Nutrition() {
    const [foodItem, setFoodItem] = useState('');
    const [portionSize, setPortionSize] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [nutritionData, setNutritionData] = useState([]);
  
    const handleDeleteButtonClick = (index) => {
      const updatedData = [...nutritionData];
      updatedData.splice(index, 1);
      setNutritionData(updatedData);
    };
  
    const handleFormSubmission = (e) => {
      e.preventDefault();
  
      const newFoodItem = {
        foodItem,
        portionSize,
        calories,
        protein,
        carbs,
        fat
      };
  
      const updatedData = [...nutritionData, newFoodItem];
      setNutritionData(updatedData);
      resetForm();
    };
  
    const resetForm = () => {
      setFoodItem('');
      setPortionSize('');
      setCalories('');
      setProtein('');
      setCarbs('');
      setFat('');
    };
  
    const updateTotalNutrition = () => {
      let totalCalories = 0;
      let totalProtein = 0;
      let totalCarbs = 0;
      let totalFat = 0;
  
      nutritionData.forEach((item) => {
        totalCalories += parseInt(item.calories);
        totalProtein += parseInt(item.protein);
        totalCarbs += parseInt(item.carbs);
        totalFat += parseInt(item.fat);
      });
  
      return { totalCalories, totalProtein, totalCarbs, totalFat };
    };
  
    const totalNutrition = updateTotalNutrition();
  
    return (
      <div className="nutrition">
        <h1>Nutrition Tracking</h1>
  
        <div className="daily-intake">
          <h2>Daily Nutrition Intake</h2>
          <table id="nutrition-table">
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Portion Size</th>
                <th>Calories</th>
                <th>Protein (g)</th>
                <th>Carbs (g)</th>
                <th>Fat (g)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.map((item, index) => (
                <tr key={index}>
                  <td>{item.foodItem}</td>
                  <td>{item.portionSize}</td>
                  <td>{item.calories}</td>
                  <td>{item.protein}</td>
                  <td>{item.carbs}</td>
                  <td>{item.fat}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteButtonClick(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p id="total-nutrition">
            Total Calories: {totalNutrition.totalCalories} | Protein (g):{' '}
            {totalNutrition.totalProtein} | Carbs (g): {totalNutrition.totalCarbs} | Fat (g):{' '}
            {totalNutrition.totalFat}
          </p>
        </div>
  
        <div className="add-food">
          <h2>Add Food Item</h2>
          <form onSubmit={handleFormSubmission} id="add-food-form">
            <div>
              <label>Food Item:</label>
              <input
                type="text"
                name="food-item"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Portion Size:</label>
              <input
                type="text"
                name="portion-size"
                value={portionSize}
                onChange={(e) => setPortionSize(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Protein (g):</label>
              <input
                type="number"
                name="protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Carbs (g):</label>
              <input
                type="number"
                name="carbs"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Fat (g):</label>
              <input
                type="number"
                name="fat"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                required
              />
            </div>
            <button type="submit">Add Food</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Nutrition;
  