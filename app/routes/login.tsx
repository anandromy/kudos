import React, { useState } from "react";
import { FormField } from "~/component/form-field";
import { Layout } from "~/component/layout";

export default function Login() {

    const [ action, setAction ] = useState('login')

    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
    }

    return (
        <Layout>
            <div className="h-screen flex flex-col justify-center items-center gap-y-4">

                <button onClick={() => setAction(action == 'login' ? 'register' : 'login')} className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
                    {action === 'login' ? 'Sign Up' : 'Sign In'}
                </button>

                <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Kudos!</h2>
                <p className="font-semibold text-slate-300">
                    {action === 'login' ? 'Log In To Give Some Praise!' : 'Sign Up To Get Started!'}
                </p>

                <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
                    <FormField 
                        label="Email" 
                        htmlFor="email" 
                        value={formData.email}
                        type="text"
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <FormField 
                        label="Password" 
                        htmlFor="password" 
                        value={formData.password}
                        type="text"
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                    {
                        action === 'register' &&
                        <>
                            <FormField 
                                label="First Name"
                                htmlFor="firstName"
                                value={formData.firstName}
                                type="text"
                                onChange={(e) => handleInputChange(e, 'firstName')}
                            />
                            <FormField 
                                label="Last Name"
                                htmlFor="lastName"
                                value={formData.lastName}
                                type="text"
                                onChange={(e) => handleInputChange(e, 'lastName')}
                            />
                        </>
                    }
                    <div className="w-full text-center">
                        <button type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
                            {action === 'login' ? "Sign In" : "Sign Up"}
                        </button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}