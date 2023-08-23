import fs from 'fs'
import path from 'path'

const filepath = path.join(process.cwd(),"data","user.json")

export function getAll(){
   const data = fs.readFileSync(filepath)
   return JSON.parse(data)
}
export function getid(id){
    const data = getAll()
    data.find(p => p.id === Number(id)  )
 }
export function getEmail(email){
    const data = getAll()
    data.find(p => p.email.toLowerCase() === email.toLowerCase())
 }
 export function save(email, password ,firstn , lastn){
    const find = getEmail(email)
    if(find){
        throw new Error ("user alredy exist")
    }
    const data = getAll()
    data.push({
        id: data.length + 1,
        email, password, firstn, lastn
    })
    fs.writeFileSync(filepath, JSON.stringify(data))
 }

