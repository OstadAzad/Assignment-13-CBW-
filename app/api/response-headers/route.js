import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req,res){

return NextResponse.json([
    {name:"azad",age:33,city:"Ctg"},
    {name:"yunus",age:33,city:"Ctg"},
    {name:"mizsn",age:27,city:"Ctg"},
    {name:"minhaz",age:20,city:"Ctg"},
    {name:"manha",age:4.5,city:"Dhaka"}],
    {
    status:201,
    headers:{"token":"abc-123-xyz"}
    })
}