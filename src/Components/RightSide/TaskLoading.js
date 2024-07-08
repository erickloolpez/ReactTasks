import React from 'react'

function TaskLoading() {
    return (
        <div className={"task"} style={{ width: '80%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 12, borderRadius: 10, marginTop: 10, }} >
            <div style={{width:'100%',height:'100%', display: 'flex', alignItems: 'center' }}>
                <div className='skeleton' style={{ width: 30, height: 30, borderRadius: 50,}} >
                </div>
                <div className='skeleton' style={{width:'90%', height:18,marginLeft:10,borderRadius:2}}></div>
            </div>
        </div>
    )
}

export {TaskLoading}