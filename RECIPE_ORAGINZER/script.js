document.addEventListener('DOMContentLoaded', function() {
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const addRecipeForm = document.getElementById('addRecipeForm');
    const recipeForm = document.getElementById('recipeForm');
    const recipesSection = document.getElementById('recipes');

    addRecipeBtn.addEventListener('click', function() {
        addRecipeForm.classList.toggle('hidden');
    });

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        saveRecipe(recipe);
        addRecipeToDOM(recipe);

        recipeForm.reset();
        addRecipeForm.classList.add('hidden');
    });

    recipesSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const recipeCard = event.target.parentElement;
            const recipeName = recipeCard.querySelector('h3').textContent;
            if (confirm(`Are you sure you want to delete ${recipeName}?`)) {
                deleteRecipe(recipeName);
                recipeCard.remove();
            }
        }
    });

    function saveRecipe(recipe) {
        // Implement saving the recipe to local storage or a database here
    }

    function deleteRecipe(recipeName) {
        // Implement deleting the recipe from local storage or a database here
    }

    function addRecipeToDOM(recipe) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${recipe.ingredients}</p>
            <p><strong>Instructions:</strong></p>
            <p>${recipe.instructions}</p>
            <button class="delete-button button">Delete</button>
        `;

        recipesSection.appendChild(recipeCard);
    }
});
