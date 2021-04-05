import React from 'react'
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer'

function App() {
  return (
    <>
      <div style={{ width: 500, height: 500 }}>
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
            onElementsRemove={() =>
              console.log('Removing elements from 1st flow')
            }
          />
        </ReactFlowProvider>
      </div>

      <div style={{ width: 500, height: 500 }}>
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
            onElementsRemove={() =>
              console.log('Removing elements from 2nd flow')
            }
          />
        </ReactFlowProvider>
      </div>
    </>
  )
}

export default App
