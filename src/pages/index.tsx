
import styles from '@/styles/Home.module.scss'


import className from 'classnames/bind'


const cx =className.bind(styles)

export default function Home() {
  return (
    <>
<main className={cx("test")}>클래스 네임 테스트
      </main>
    </>
  )
}
