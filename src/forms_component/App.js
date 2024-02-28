import './App.css';

function NextButton() {
    return (
    <form action=" " method="POST">
        <input type="submit" id="submit" name="submit" value="Next" ></input>
        {/* <button id="NextButton" className="NextButton"> Next </button> */}
    </form>
    );
}

export function FormsGrid() {
return (
    <div className="formsGridContainer">
        <div className="FormsGrid">
            <div className="InputForms">
                <h1>Skriv deg opp i køen</h1>
                <form>
                    <label htmlFor="Navn"> Navn </label> <br></br>
                    <input type="text" id="Navn" name="Navn"/><br />
                    <label htmlFor="Sted"> Sted </label> <br></br>
                    <input type="text" id="Sted" name="Sted"/><br />
                </form> 
                <br></br><NextButton/>
            </div>
        </div>
    </div>
);
}
