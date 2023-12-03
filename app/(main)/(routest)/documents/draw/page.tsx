'use client'

import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import '@tldraw/tldraw/tldraw.css'
import {
  DefaultBackground,
  createTLStore,
  defaultShapeUtils,
} from '@tldraw/tldraw'

const DrawPage = () => {
  // const [store] = useState(() => {
  //   const newStore = createTLStore({
  //     shapeUtils: defaultShapeUtils,
  //   })
  //   const stringified = localStorage.getItem('my-editor-snapshot')
  //   const snapshot = JSON.parse(stringified)
  //   newStore.loadSnapshot(snapshot || '')
  //   return newStore
  // })

  const Tldraw = useMemo(
    () =>
      dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
        ssr: false,
      }),
    []
  )

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Tldraw
        persistenceKey='joy-note-persistence'
        // store={store}
      />
    </div>
  )
}

export default DrawPage
