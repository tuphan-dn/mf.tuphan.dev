'use client'
import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'

import styles from './index.module.scss'
import Roller from 'components/roller'

export type SplashProps = {
  open?: boolean
}

export default function Splash({ open }: SplashProps) {
  const [display, setDisplay] = useState<'block' | 'none'>('block')

  useDebounce(
    () => {
      if (!open) setDisplay('none')
    },
    500,
    [open],
  )

  useEffect(() => {
    if (open) setDisplay('block')
  }, [open])

  return (
    <div className={styles['splash-mark']} style={{ display }}>
      <div className={styles['splash-container']}>
        <Roller style={{ marginTop: -40 }} />
      </div>
    </div>
  )
}
