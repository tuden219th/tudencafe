"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";


export default function CmsAdminGuard({
 children,
}:{
 children:React.ReactNode;
}){


const router = useRouter();

const [loading,setLoading]=useState(true);



useEffect(()=>{


async function check(){


const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user){

router.push("/admin/cms/login");
return;

}



const {
data:profile
}=await supabase
.from("profiles")
.select("role")
.eq("id",user.id)
.single();



if(profile?.role !== "admin"){

router.push("/admin/cms/login");
return;

}



setLoading(false);


}


check();


},[]);



if(loading){

return (
<div className="p-10">
Loading...
</div>
)

}



return children;


}