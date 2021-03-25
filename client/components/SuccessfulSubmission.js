import React from "react"

const SuccessfulSubmission = ({ userName }) => {
  let name = userName || "A.R.I.S Project"

  let today = new Date().getTime()
  let tomorrow = new Date(today)
  let deliveryDate = tomorrow.setDate(tomorrow.getDate() + 3)

  const countDown = () => {
    let today = new Date().getTime()
    let gap = deliveryDate - today
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const d = Math.floor(gap / day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)

    document.getElementById("day").innerText = d
    document.getElementById("hour").innerText = h
    document.getElementById("minute").innerText = m
    document.getElementById("second").innerText = s
  }

  setInterval(() => {
    countDown()
  }, 1000)

  return (
    <div id="countdown-container">
      <div id="countdown-imgBx"></div>
      <div id="countdown-bx">
        <h2>
          Congratulations, <strong>{name}</strong>! <br />
          <span>
            Your submission is <i>in process.</i>
          </span>
        </h2>
        <div id="countdown">
          <div id="day">3</div>
          <div id="hour">00</div>
          <div id="minute">00</div>
          <div id="second">00</div>
        </div>
      </div>
    </div>
  )
}

export default SuccessfulSubmission
