import React from 'react'
import Client from '../component/Client'
import Projects from '../component/Projects'
import AddClientModel from '../component/AddClientModel'
import AddProjectModal from '../component/AddProjectModel'

export default function Home() {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddProjectModal />
                <AddClientModel />
            </div>
            <hr />
            <Projects />
            <Client />
        </>
    )
}
