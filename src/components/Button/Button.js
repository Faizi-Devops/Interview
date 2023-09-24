const Button = (props) =>{
    return(
        <div>
            <button type="button" class="btn btn-warning btn-sm w-100" style={{color:"white"}} onClick={props.onClick}>{props.buttonvalue}</button>


        </div>
    )
}
export default Button;