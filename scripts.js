
//Start variables and querys

let startButton = document.querySelector('#start-button')

let stopButton = document.querySelector('#stop-button')

let dateInput = document.querySelector('#date-input')

dateInput.value = ''

let countdown = document.querySelector('#countdown')

let textInput = document.querySelector("#event-name")

let eventName = ''

let userDateNow = ''

let eventDate = ''

let interval = ''

// Functions

  // Listen to start function

  function listenStart(callBack) {
    startButton.addEventListener("click", callBack)
  }

  function listenStop(callBack) {
    stopButton.addEventListener('click', callBack)
  }


  // Validations (Event Name and Date)

  const validates = (eventName, eventDate) => {
    if (eventName && eventDate && new Date(eventDate) > new Date(Date.now())) {
      return true
    } else return false
  }

  listenStart(() => { // Only Executes the countdown if everything is okay

    // Get both variables to use on theCountdown function

    eventDate = dateInput.value

    eventName = textInput.value

    console.log(eventDate)

    if (validates(eventName, eventDate)) {

      eventDate = new Date(eventDate)
      
      theCountdown() 

    } else alert("Please, enter a valid date and event name")
  })

    listenStop(() => {

      stopCountdown(interval)

      daysHtml.innerHTML = '00'
      hoursHtml.innerHTML = '00'
      minutesHtml.innerHTML = '00'
      secondsHtml.innerHTML = '00'
    })

  // COUNTDOWN

    // Starts the countdown specific variables and querys
    
    let days = 1
    let hours = 1
    let minutes = 1
    let seconds = 1

    let daysHtml = document.querySelector('#days')
    let hoursHtml = document.querySelector('#hours')
    let minutesHtml = document.querySelector('#minutes')
    let secondsHtml = document.querySelector('#seconds')


    function theCountdown() {
      let elapsed = new Date() // The difference btwn Event Date and the User Date Now

      interval = setInterval(() => { // Interval that refreshes the values and display every second

        textInput.disabled = true

        userDateNow = Date.now()
        elapsed = new Date(eventDate - userDateNow)
        defineDate(elapsed)
        
        displayCoundown(days, hours, minutes, seconds)
        

          if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            stopCountdown(interval)
          }

        console.log(seconds.length)
        }, 1000);

    }

      // Converts the date from milliseconds to readable time

      function defineDate(time) {
        days = String(Math.floor(time / (1000 * 60 * 60 * 24)))
          days.length < 2 ? days = '0' + days : ""

        hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
          hours.length < 2 ? hours = '0' + hours : ""

        minutes = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
          minutes.length < 2 ? minutes = '0' + minutes : ""

        seconds = String(Math.floor((time % (1000 * 60)) / 1000))
          seconds.length < 2 ? seconds = '0' + seconds : ''

        return days && hours && minutes && seconds
      }

      function stopCountdown(name) {
        clearInterval(name)
        textInput.disabled = false
      }

      function displayCoundown(days, hours, minutes, seconds) {
          daysHtml.innerHTML = days
          hoursHtml.innerHTML = hours
          minutesHtml.innerHTML = minutes
          secondsHtml.innerHTML = seconds
        }