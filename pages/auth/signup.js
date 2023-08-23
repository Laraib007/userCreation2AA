import Form from "@/component/auth/form";

export default function signup(){
    const onsubmit = async (email, password, firstn , lastn)=>{
        
        try{
            //Idhr file path sahi nhi diya tha
           const respo =  await fetch("/api/auth/signup", {
            method:"POST",
            body:JSON.stringify({email, password, firstn , lastn}),
            headers:{
                "Content-Type": "application/json"
            }
        }) 
        if (respo.ok) {
            alert("signup successful")
        }
        }catch(err){
            console.error
        }
      
        }
    return(
        <>
        <Form signin={false} onformsubmit = {onsubmit} />
        </>
    )
}