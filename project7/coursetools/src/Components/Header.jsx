import '../styles/header.scss'
import logo from '../images/ischool.png'
 
export function Header () {
  return (
    <header>
        <div class="container1">
            <div class="container1image"><img src={logo} alt="ischool logo" width="100px"/></div>
            <div class="container1header">
                IST 263 - M002 <br/>
                Class References, Shortcuts, Tools
            </div>
        </div>
        <nav>
            <div> <a href={"../schedule.html"}>SCHEDULE</a></div>
            <div> <a href="../index.html">HOME</a></div>
            <div> <a href="../pomodoro.html"><strong>POMODORO</strong></a></div>
        </nav>
    </header>
  )
}