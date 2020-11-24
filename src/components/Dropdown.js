export function Dropdown(props){

    return (
        <select value={props.value} onChange={props.onChange} className="select">
            <option value="num0">0</option>
            <option value="num1">1</option>
            <option value="num2">2</option>
            <option value="num3">3</option>
            <option value="num4">4</option>
            <option value="num5">5</option>
            <option value="num6">6</option>
            <option value="num7">7</option>
            <option value="num8">8</option>
            <option value="num9">9</option>
            <option value="undefined">No class selected</option>
          </select>
    )
}