import React from 'react'

function TaskList({error, loading, onError, onLoading, depureTodos,onEmpty, children,taskList }) {
    return (
        <div className={'yourTasks'} style={{ width: '80%', height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
            {error && onError()}
            {loading && onLoading()}
            {(!loading && depureTodos.length === 0) && onEmpty()}
            {taskList.map(children)}
        </div >
    )
}

export { TaskList }