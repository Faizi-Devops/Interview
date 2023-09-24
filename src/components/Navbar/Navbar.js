const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" style={{paddingLeft:"10px"}}>
                            <a class="nav-link" href="#"><img src="man.png" alt="man" height={22} /></a>
                        </li>
                        
                        
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#"> <img src="bell.png" alt="man" height={20} /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#"> <img src="chat.png" alt="man" height={20} /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#"><img src="search.png" alt="man" height={20} /></a>
                        </li>

                    </ul>
                   
                   
                </div>
                <div style={{textAlign:"right",paddingRight:"10px",color:"#767D87"}}>{props.cont}</div>
            </nav>




        </div>
    )
}
export default Navbar;