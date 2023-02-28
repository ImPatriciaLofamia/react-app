const Button = ({color, onPress,disabled}) => {
return (
<>
    <button disabled={disabled} onClick={onPress} style={{backgroundColor: color}}>Hello</button>
</>
);
}
export default Button
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };