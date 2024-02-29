import './App.css';

function NextButton(){
    return(
        <form action="">
            <input type="Submit" value="Next"/>
        </form>
    );
}

function handleKeyDown(event) {
    if (event.keyCode === 13) {
    console.log('Enter key was pressed');
    }
}



export function FormsGrid() {
return (
    <div className="formsGridContainer">
        <div className="FormsGrid">
            <div className="InputForms">
                <h1> Skriv deg opp i køen </h1>
                <form>
                    <label htmlFor="Navn"> Navn </label><br />
                    <input type="text" id="Navn_" name="Navn" onKeyDown={handleKeyDown}/><br />
                    <label htmlFor="Sted"> Sted </label><br />
                    <input type="text" id="Sted_" name="Sted" onKeyDown={handleKeyDown}/>
                </form>
                <br /><NextButton/>
            </div>
        </div>
    </div>
);
}
