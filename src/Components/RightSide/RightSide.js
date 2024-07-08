import React from 'react'
import { YourTasks } from './YourTasks'

function RightSide() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start',zIndex:2 }}>
            <YourTasks />
        </div>
    )
}

export { RightSide }