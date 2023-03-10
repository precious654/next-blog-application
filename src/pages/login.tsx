import React from 'react'
import Button from '@/components/Button'
import Head from 'next/head';
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat(
    {
        subsets: ['latin'],
        weight: ['100', '400']
    }
)

function login() {

    const[ formData, setFormData] = React.useState({
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
            <input type="email" name='email' placeholder='Email' className={montserrat.className} onChange={ handleChange } />
            <input type="password" name='password' placeholder='Password' className={montserrat.className} onChange={ handleChange } />

            <div>
                <Button text='Log In'/>
            </div>
        </form>

    </div>
  )
}

export default login;