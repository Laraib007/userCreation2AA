import { useRef } from "react"

export default function Form({login, onformsubmit}){
  const emailref = useRef()
  const passwordref = useRef()
  const firstref = useRef()
  const lastref = useRef()
  const submithandler = (e)=>{
    const email = emailref.current.value
    const password = passwordref.current.value
    const firstn = firstref.current.value
    const lastn = lastref.current.value
e.preventDefault()
onformsubmit(email ,password, firstn , lastn)
  }
    return(
    <>
  <div><h1 class="mar-left si">Signup</h1></div>
   <div class="form-flex">
   <div class="forum">
    <form onSubmit={submithandler}>
   <div class="form-floating mb-3">
  <input ref={firstref} type="text" class="form-control" id="floatingInput" placeholder="First Name"/>
  <label for="floatingInput">First Name</label>
</div>
<div class="form-floating mb-3">
  <input ref={lastref} type="text" class="form-control" id="floatingInput" placeholder="Last Name"/>
  <label for="floatingInput">Last Name</label>
</div>
   <div class="form-floating mb-3">
  <input ref={emailref} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input ref={passwordref} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div><button type="submit" class="btn btn-primary">Signup</button></div>
</form>
</div>
</div>
    </>
    )
}