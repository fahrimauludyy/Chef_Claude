import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(fromData){
        const ingredients = fromData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredients]) 
        
    }
    return(
    <main className="w-full flex flex-col items-center px-96 pt-16">
      
        <h1 className="text-5xl font-bold mb-10">Let's cook your Meal!</h1>
        <form action={handleSubmit} className="flex flex-row gap-5 w-full mb-5 justify-center">
            <input className="border border-gray-300 outline-none focus:border-gray-500 focus:border-2 w-3/4 rounded-md px-2" 
            type="text" placeholder="e.g oregano" aria-label="Add Ingredient" name="ingredient" />
            <button className="bg-[#202020] text-white px-2 h-12 w-1/4 rounded-md font-semibold "> + Add Ingredient</button>
        </form>
        <div className="flex items-start w-full">
        <ul>
            {ingredientsListItems}
        </ul>
        </div>
        
     
       
        
    </main>
    )
    
    
   
}