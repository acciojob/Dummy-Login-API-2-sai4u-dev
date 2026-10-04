import React, { useState } from 'react'

function DummyLogin() {
    const database = [
        { email: "john.doe@gmail.com", password: "John@123" },
        { email: "rahul.sharma@gmail.com", password: "Rahul@456" },
        { email: "priya.patel@gmail.com", password: "Priya@789" },
        { email: "alex.wilson@gmail.com", password: "Alex@321" },
        { email: "neha.kapoor@gmail.com", password: "Neha@654" }
    ]


    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        type: "",
        message: "",
        status: false
    })
    const [loginSuccess, setLoginSuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        setError({ type: "", message: "", status: false })
        setLoginSuccess(false)

        setLoginSuccess(false)

        setTimeout(() => {
            const { email, password } = userData

            const emailExists = database.find(user => user.email === email)

            if (!emailExists) {
                setError({ type: "email", message: "Invalid Email", status: true })
                return
            }

            if (emailExists.password !== password) {
                setError({ type: "password", message: "Invalid Password", status: true })
                return
            }

            setUserData({ email: "", password: "" })
            setError({ type: "", message: "", status: false })
            setLoginSuccess(true)
        }, 3000)
    }


    return (
        <form onSubmit={handleSubmit}>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div>
                                <label htmlFor="input-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    id="input-email"
                                    value={userData.email}
                                    onChange={(e) => {
                                        setUserData({ ...userData, email: e.target.value })
                                        setError({ type: "", message: "", status: false })
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="input-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    id="input-password"
                                    value={userData.password}
                                    onChange={(e) => {
                                        setUserData({ ...userData, password: e.target.value })
                                        setError({ type: "", message: "", status: false })
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center">

                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button id="submit-form-btn" type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#2563EB]" >Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                            {error.status && error.type === "email" ? <p id="user-error" className='text-red-600'>User not found</p> : error.status && error.type === "password" ? <p id="password-error" className='text-red-600'>Password Incorrect</p> : ""}
                            {loginSuccess && <p className='text-green-500'>Successfull login</p>}

                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default DummyLogin