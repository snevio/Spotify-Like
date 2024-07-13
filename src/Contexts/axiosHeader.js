
const headers = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    }
}

export default headers