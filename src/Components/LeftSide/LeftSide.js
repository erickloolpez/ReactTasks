import React from 'react'
import { CreateTask } from './CreateTask'

function LeftSide() {
    return (
        <div style={{display:'flex', alignItems:'center',justifyContent:'flex-end',zIndex:2}}>
            <CreateTask />
        </div>
    )
}

export {LeftSide}