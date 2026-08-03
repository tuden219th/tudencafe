"use client";


import {
useState
} from "react";


import {
supabase
} from "@/lib/supabase/client";


import {
useRouter
} from "next/navigation";



export default function Login(){


const router=useRouter();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



async function login(){


const {
error
}=await supabase.auth.signInWithPassword({

email,

password

});


if(error){

alert(error.message);
return;

}


router.push("/admin");


}




return (

<div className="min-h-screen flex items-center justify-center">


<div className="w-[400px] bg-white p-8 rounded-xl shadow">


<h1 className="text-2xl font-bold mb-6">
Admin Login
</h1>


<input

className="border p-3 w-full mb-3"

placeholder="Email"

onChange={
e=>setEmail(e.target.value)
}

/>


<input

type="password"

className="border p-3 w-full mb-5"

placeholder="Password"

onChange={
e=>setPassword(e.target.value)
}

/>


<button

onClick={login}

className="bg-black text-white w-full p-3 rounded"

>

Login

</button>



</div>


</div>

)


}