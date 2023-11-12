import React from 'react'
import Client from '../component/Client'
import Projects from '../component/Projects'
import AddClientModel from '../component/AddClientModel'

export default function Home() {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddClientModel />
            </div>
            <hr />
            <Projects />
            <Client />
        </>
    )
}
