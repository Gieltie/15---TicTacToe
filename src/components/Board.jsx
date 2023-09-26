import Square from "./Square"

const Board = ({ squares, onClick }) => (
<div>
    <Square value="1" onClick={() => onClick("dummy shit")}/>
    <Square value="2" onClick={() => onClick("dummy shit")}/>
    <Square value="3" onClick={() => onClick("dummy shit")}/>
    <Square value="4" onClick={() => onClick("dummy shit")}/>
    <Square value="5" onClick={() => onClick("dummy shit")}/>
    <Square value="6" onClick={() => onClick("dummy shit")}/>
    <Square value="7" onClick={() => onClick("dummy shit")}/>
    <Square value="8" onClick={() => onClick("dummy shit")}/>
    <Square value="9" onClick={() => onClick("dummy shit")}/>
</div>
)

export default Board