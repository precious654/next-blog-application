import React from "react";
import Button from "@/components/Button";
import Head from "next/head";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat(
    {
        subsets: ['latin'],
        weight: ['100', '400']
    }
)

function signup() {

    const[ formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    interface data{
        target: {
            name: string,
            value: string
        }
    }

    function handleChange(event: data) {
        setFormData( (prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

  return (
    <div style={{ marginBlockStart: '7rem'}}>
        <Head>
            <title>Sign Up</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <form>
            <input type="text" name='firstname' placeholder='FirstName' className={montserrat.className} onChange={ handleChange } />
            <input type="text" name='lastname' placeholder='LastName' className={montserrat.className} onChange={ handleChange } />
            <input type="email" name='email' placeholder='Email' className={montserrat.className} onChange={ handleChange } />
            <input type="password" name='password' placeholder='Password' className={montserrat.className} onChange={ handleChange } />

            <div>
                <Button text=" Sign Up" />
            </div>
        </form>

    </div>
  )
}

export default signup;