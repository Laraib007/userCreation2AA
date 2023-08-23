
import Link from "next/link";
export default function Header (){
    return(
        <>
        <div class="head">
            <div class="head-fle">
           <div class="mar-left">
            <Link href="/"><h1>My Blog Site</h1></Link>
             </div>
           <div class="log-fle">
           <Link href="/auth/login"><h6 class="mar">Login</h6></Link> 
           <Link href="/auth/signup"><h6 class="mar">Signup</h6></Link> 
           <h6>Logout</h6>
           </div>
           
           </div>
        </div>
        </>
    )
}