// ***** notificatuon borders *****
const NOTIFICATION_BORDERS = document.querySelectorAll(".border")
const NOTIFICATION_BORDERS_CORNER = document.querySelectorAll(".corner-border")
const INCOMING_NOTIFICATION = document.querySelectorAll(
  ".incoming-notification"
)

const incomingNotification = color => {
  setTimeout(() => {
    NOTIFICATION_BORDERS.forEach(border => (border.style.background = color))
    NOTIFICATION_BORDERS_CORNER.forEach(
      border => (
        (border.style.background = "transparent"),
        (border.style.borderBottom = `0.15rem solid ${color}`)
      )
    )
    INCOMING_NOTIFICATION.forEach(
      border => (border.style = `border: 0.15rem solid ${color}`)
    )
    setTimeout(() => {
      NOTIFICATION_BORDERS.forEach(
        border => (border.style.background = "whitesmoke")
      )
      NOTIFICATION_BORDERS_CORNER.forEach(
        border => (
          (border.style.background = "transparent"),
          (border.style.borderBottom = `0.15rem solid whitesmoke`)
        )
      )

      INCOMING_NOTIFICATION.forEach(
        border => (border.style = `border: 0.15rem solid whitesmoke`)
      )
      incomingNotification(color)
    }, 500)
  }, 500)
}

const incomingNotificationActivate = setInterval(
  incomingNotification("crimson"),
  500
)

// ***** cancel notification *****

// ***** open broswer  *****
const BROWSER_FOLD = document.querySelector("#browser .top-fold")
let browserOpen = false
let browserCurrent = false

const OPEN_BROWSER = document.querySelector("#open-browser")
OPEN_BROWSER.addEventListener(
  "click",
  () => {
    if (!browserCurrent) {
      BROWSER_FOLD.style.transform = "rotateX(0deg)"
      OPEN_BROWSER.children[1].classList.add("current")
      OPEN_BROWSER.children[1].style.opacity = "1"
      setTimeout(() => {
        OPEN_BROWSER.children[1].style.opacity = "0"
        setTimeout(() => {
          OPEN_BROWSER.children[1].style.opacity = "1"
        }, 400)
      }, 400)
      browserOpen = true
      browserCurrent = true
    } else {
      BROWSER_FOLD.style.transform = "rotateX(90deg)"
      OPEN_BROWSER.children[1].classList.add("active")
      OPEN_BROWSER.children[1].classList.remove("current")
      browserCurrent = false
    }
  },
  false
)

// ***** open sidebar on tab click *****
const SIDEBAR_TAB = document.querySelector("#slide-tab-container")
const SIDEBAR_CONTAINER = document.querySelector("#sidebar-container")
let sideBarOpen = false
SIDEBAR_TAB.addEventListener(
  "click",
  () => {
    SIDEBAR_TAB.style.background = "rgba(245, 245 , 245, .9)"
    setTimeout(() => {
      SIDEBAR_TAB.style.background = "transparent"
    }, 150)
    if (!sideBarOpen) {
      SIDEBAR_CONTAINER.style.left = "0"
      sideBarOpen = true
    } else {
      SIDEBAR_CONTAINER.style.left = "-6.25rem"
      sideBarOpen = false
    }
  },
  false
)
