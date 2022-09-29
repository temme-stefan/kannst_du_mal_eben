import {useState} from "react";
import {generateMatrizes} from "./lib/MatrixGenerator.mjs";
import './Calculator.css'

function Matrix({matrix}) {
    // console.log(props);
    return (<table>
            <tbody>
            <tr>
                <td>
                    {matrix[0][0]}
                </td>
                <td>
                    {matrix[1][0]}
                </td>
                <td>
                    {matrix[2][0]}
                </td>
            </tr>
            <tr>
                <td>
                    {matrix[0][1]}
                </td>
                <td>
                    {matrix[1][1]}
                </td>
                <td>
                    {matrix[2][1]}
                </td>
            </tr>
            <tr>
                <td>
                    {matrix[0][2]}
                </td>
                <td>
                    {matrix[1][2]}
                </td>
                <td>
                    {matrix[2][2]}
                </td>
            </tr>
            </tbody>
        </table>
    );
}


function Calculator() {
    const [abc, setAbc] = useState({a: "a", b: "b", c: "c"});
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setAbc(formProps);
    };
    const matrizen = generateMatrizes(abc.a, abc.b, abc.c);

    return (
        <>
            <form id={"inputs"} onSubmit={handleSubmit}>
                <input key="input_a" name="a" type="text" defaultValue={abc.a}/>
                <input key="input_b" name="b" type="text" defaultValue={abc.b}/>
                <input key="input_c" name="c" type="text" defaultValue={abc.c}/>
                <button type="submit">Aktualisieren</button>
            </form>
            <output>
                {matrizen.map((mat,i) => (<Matrix key={"matrix_"+i} matrix={mat}/>))}
            </output>
        </>
    );
}

export default Calculator;