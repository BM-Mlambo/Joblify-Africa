"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {FaEye,FaEyeSlash} from "react-icons/fa"
export default function ResetPassword(){
    const router=useRouter()
    const[password,setpassword]=userState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[showPassword,setShowPassword]=useState(false)
    const[loading,setLoading]=useState(false)
    const handlesubmit=async (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
        alert("passwords do not match")
        return
        }
        setLoading(true)
        const res=await fetch("/api/reset-password",{
            method:"POST",
            headers:{
                "content-Type":"application/json",

            },
            body:JSON.stringify({
                email,
            })
        })
        const data=await res.json()
        console.log(data)
        setLoading(false)
        setPassword("")
        setConfirmPassword("")
        router.push("/login")
    }
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-xl p-10 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-center text-blue-700">Reset Password</h1>
                <form onSubmit={handlesubmit} className="mt-6 flex flex-col gap-4">
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    )
}