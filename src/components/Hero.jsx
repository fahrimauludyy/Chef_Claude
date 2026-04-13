
export default function Main() {
    return(
    <main className=" flex justify-center px-60 pt-12 overflow-x-hidden">
        <form className="flex flex-col gap-5 w-1/2">
            <input className="border rounded-md p-3" type="text" placeholder="e.g oregano" aria-label="Add Ingredient" />
            <button className="bg-[#202020] text-white p-3 rounded-md font-semibold "> + Add Ingredient</button>
        </form>
    </main>
    )
    
    
   
}