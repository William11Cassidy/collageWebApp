var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event) {
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    if (content == "selfie") {
        speak()
    }
}

function speak() {
    var synth = speechSynthesis
    speakdata = "taking selfie in five seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)

    Webcam.attach(camera)
    setTimeout(function () {
        selfie(1)
        save(1)
        synth.speak(utterthis)

    }, 5000)
    setTimeout(function () {
        selfie(2)
        save(2)

        synth.speak(utterthis)

    }, 10000)
    setTimeout(function () {
        selfie(3)
        save(3)

        synth.speak(utterthis)

    }, 15000)
    setTimeout(function () {
        selfie(4)
        save(4)

        synth.speak(utterthis)

    }, 20000)
}
camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
})

function selfie(num) {
    Webcam.snap(function (data) {
        document.getElementById("result"+num).innerHTML = "<img id='selfie"+num+"' src='" + data + "'>"
    })
}

function save(num) {
    img = document.getElementById("selfie"+num).src
    link.href = img
    link.click()
}