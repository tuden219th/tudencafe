"use client";


import {
useAuth
} from "@/context/AuthContext";


export default function AdminPage(){


const {
user
}=useAuth();



return (

<div className="p-10">


<h1 className="text-3xl font-bold">

Admin Dashboard

</h1>


<p className="mt-4">

Xin chào:
{" "}
{user?.email}

</p>


<div className="grid grid-cols-3 gap-5 mt-10">


<div className="bg-white p-6 rounded-xl border">

Posts

<br/>

0

</div>


<div className="bg-white p-6 rounded-xl border">

Users

<br/>

0

</div>


<div className="bg-white p-6 rounded-xl border">

Comments

<br/>

0

</div>


</div>


</div>

)


}