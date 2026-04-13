import chefIcon from "../assets/chef-claude-icon.png"


export default function Header() {
    return(
        <header className="w-full h-20 flex justify-center items-center gap-5 bg-white shadow">
            <img className="w-11" src={chefIcon} alt="chef-icon" />
            <h1 className="text-3xl font-semibold">Chef Claude</h1>
        </header>
    )
}