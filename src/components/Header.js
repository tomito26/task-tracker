import Button from "./Button";
import React from "react";

function Header({ onAdd,showForm }){
 
    return(
    <div>
        <header className="header">
            <h2>Task Tracker</h2>
            <Button color={showForm ? 'red':'green'} text={showForm ? 'close' : 'add'}  onClick={onAdd}/>
        </header>
      

    </div>);
}

export default Header