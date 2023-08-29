import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req,res){

    
    let ctheme=req.cookies.get("theme");
    let clan=req.cookies.get("language");
    let discookie=req.cookies.get("cookie")

    return NextResponse.json({res:ctheme,clan, discookie})
}