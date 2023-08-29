import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";


export function middleware(req,res){
    if(req.nextUrl.pathname.startsWith("/api/headers")){

    const reqHeader=new Headers(req.headers);
    const token=reqHeader.get("Bearer");

    if(token==="abc-123-xyz"){
        return NextResponse.next();
    }
    else{
        return NextResponse.json({message:"fail"}, {status:401})
    }
    }
}