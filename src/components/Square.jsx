const style = {
    background: 'lightblue',
    margin: '1px',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    color: 'black'
}

const Square = ({ value, onClick }) => (
    <button style ={style} onClick={onClick}>
        {value}
    </button>
)

export default Square