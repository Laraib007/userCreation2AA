import Form from "@/component/auth/form"

export default function signin() {
  const onsubmit = () =>{

  }
    return( 
        <>
        <div><h1 class="mar-left si">Signup</h1></div>
        <div class="form-flex">
        <div class="forum">
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div><button type="submit" class="btn btn-primary" onformsubmit = {onsubmit}>Login</button></div>
</div>
        </div>
        
        </>    
    )
    
}