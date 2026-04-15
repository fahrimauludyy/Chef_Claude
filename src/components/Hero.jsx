
export default function Main() {
    return(
    <main className="w-full flex flex-col items-center pt-16">
        <h1 className="text-5xl font-bold mb-10">Let's cook your Meal!</h1>
        <form className="flex flex-row gap-5 w-1/2  justify-center">
            <input className="border border-gray-300 outline-none focus:border-gray-500 focus:border-2 w-120 rounded-md px-2" type="text" placeholder="e.g oregano" aria-label="Add Ingredient" />
            <button className="bg-[#202020] text-white px-2 h-12  rounded-md font-semibold "> + Add Ingredient</button>
        </form>
    </main>
    )
    
    
   
}