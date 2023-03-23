const formatTime = async (time) => {
    let hours = await time / 100
    let minutes = await time % 10

    if (minutes === 0) {
        minutes = '00'
    }

    let result

    if (hours >= 13) {
        result = (hours - 12) + ":" + minutes + " PM"
    }
    else if (hours >= 12) {
        result = time + " PM"
    }
    else {
        result = time + " AM"
    }

    return result
}

export default {
    formatTime
}