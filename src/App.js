import React, { useState } from 'react'
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer'

function App() {
  const [activeFlow, setActiveFlow] = useState('flow-1')

  return (
    <>
      <div
        style={{ width: 500, height: 500, border: '1px solid red' }}
        onClick={() => setActiveFlow('flow-1')}
      >
        <ReactFlowProvider>
          <ReactFlow
            elements={[
              {
                id: 'node-1',
                data: { label: 'node 1' },
                position: { x: 0, y: 0 }
              }
            ]}
            deleteKeyCode={8}
            onElementsRemove={
              activeFlow === 'flow-1'
                ? (elements) => {
                    console.log('Removing elements from 1st flow')
                    console.log(elements)
                  }
                : null
            }
          />
        </ReactFlowProvider>
      </div>

      <div
        style={{ width: 500, height: 500, border: '1px solid red' }}
        onClick={() => setActiveFlow('flow-2')}
      >
        <ReactFlowProvider>
          <ReactFlow
            elements={[
              {
                id: 'node-2',
                data: { label: 'node 2' },
                position: { x: 0, y: 0 }
              }
            ]}
            deleteKeyCode={8}
            onElementsRemove={
              activeFlow === 'flow-2'
                ? (elements) => {
                    console.log('Removing elements from 2nd flow')
                    console.log(elements)
                  }
                : null
            }
          />
        </ReactFlowProvider>
      </div>
    </>
  )
}

export default App
