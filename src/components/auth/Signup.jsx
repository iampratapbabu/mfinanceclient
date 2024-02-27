import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <section>
            Signup
            <div>Already have an Account? <Link to='/login'>Login</Link></div>

            </section>
        </>
    )
}

export default Signup