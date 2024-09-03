function Header() {
    return ( 
        <header className="bg-teal-500 shadow p-4 flex justify-between">
            <h1 className="text-x1 font-bold">KSU Computer Engineering</h1>
            <div>
                <button className="t xt-gray-700 p-3">Logout</button>
            </div>
        </header>     
    );
}

export default Header;