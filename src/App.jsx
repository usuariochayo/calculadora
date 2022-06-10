import './App.css';
import  {useState} from "react"
function App(){
	const [number1, setNumber1]= useState("");
	const [number2, setNumber2]= useState("");
	const [currentOperation, setCurrentOperation]= useState("");
	const [result, setResult]= useState(0);

	const listas= JSON.parse(localStorage.getItem("calculadora"))||[]
	const [historial, sethistorial]= useState(listas);

	function allClear() {

		const Rosario={nun1:number1, nun2:number2, sig:currentOperation, res:result}
		const nuevoarreglo=[...historial, Rosario]
		sethistorial([...nuevoarreglo])
		localStorage.setItem("calculadora", JSON.stringify(nuevoarreglo))


		setNumber1("");
		setNumber2("");
		setCurrentOperation("");
		setResult("");
	}

	function clickNumber (val){
		if(currentOperation === ""){
			setNumber1(number1 + val);
		}else{
			setNumber2(number2 + val);
			
		}
	}
    function clickOperation (val){
		setCurrentOperation(val);
	}

	function getResult () {
		switch (currentOperation) {
			case "+":
				setResult(Number(number1) + Number(number2));
				break;
				case "-":
					setResult(Number(number1) - Number(number2));
					break;
					case "*":
						setResult(Number(number1) * Number(number2));
						break;
						case "/":
							setResult(Number(number1) / Number(number2));
							break;
		}
	}


  return (
    <div className="App">
		<center>
		<h1>CALCULADORA</h1>
		</center>
      			<div className="calculadora-grid">
				    <div className="output">
            <div className="previous-operand">{currentOperation ? number1 + currentOperation : ""}</div>
            <div className="current-operand">{result ? result : (!currentOperation ? number1 : number2)}</div>

					</div>

					<button onClick={allClear} className="span-two">AC</button>
					<button onClick={() => {}} >DEL</button>
					<button onClick={() => {clickOperation("/")}}>/</button>
					<button onClick={() => {clickNumber(7)}}>7</button>
					<button onClick={() => {clickNumber(8)}}>8</button>
					<button onClick={() => {clickNumber(9)}}>9</button>
					<button onClick={() => {clickOperation("*")}}>*</button>
					<button onClick={() => {clickNumber(4)}}>4</button>
					<button onClick={() => {clickNumber(5)}}>5</button>
					<button onClick={() => {clickNumber(6)}}>6</button>
					<button onClick={() => {clickOperation("+")}}>+</button>
					<button onClick={() => {clickNumber(1)}}>1</button>
					<button onClick={() => {clickNumber(2)}}>2</button>
					<button onClick={() => {clickNumber(3)}}>3</button>
					<button onClick={() => {clickOperation("-")}}>-</button>
					<button onClick={() => {clickNumber(".")}}>.</button>
					<button onClick={() => {clickNumber(0)}}>0</button>
                    <button onClick={getResult}className="span-two">=</button>
    </div>

	<div>
		{
	    	historial.map((item,index)=>{
			   return(
			      <li key={index}>
				      {item.nun1}{item.sig}{item.nun2}={item.res}
			      </li>
			    )
		    })
		}
	   </div>
	
	</div>

  );
}
export default App;
