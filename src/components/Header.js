import Button from "./Button";


function Header(){
    const onClick = ()=>{
        console.log("Welcome To ReactJs track")
    }
    return(
    <div>
        <header className="header">
            <h2>Task Tracker</h2>
            <Button color='green' text="add"  onClick={onClick}/>
        </header>
      

    </div>);
}

export default Header