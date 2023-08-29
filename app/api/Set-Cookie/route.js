import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req,res){


    return NextResponse.json(
        [
        {theme: "dark"},
        {language: "en"}
        ],
        {
        status:301,
        headers:{'Set-Cookie':'theme=dark;path=/;Expires=FRI,30 Aug 2023 03:26:17 GMT;Secure=true'}
        }
        )
}