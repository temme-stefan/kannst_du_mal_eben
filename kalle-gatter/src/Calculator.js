import {useState} from "react";



function Calculator() {
    const [abc,setAbc] = useState({a:"a",b:"b",c:"c"});
    const handleSubmit= (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setAbc(formProps);
    };
    return (
        <>
            <form id={"inputs"} onSubmit={handleSubmit}>
                <input key="input_a" name="a" type="text" defaultValue={abc.a}/>
                <input key="input_b" name="b" type="text" defaultValue={abc.b}/>
                <input key="input_c" name="c" type="text" defaultValue={abc.c}/>
                <button type="submit">Aktualisieren</button>
            </form>
            <output>

            </output>
        </>
    );
}

export default Calculator;