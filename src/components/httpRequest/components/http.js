
export async function fetchAbaliablePlaces(){
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Something went wrong!");
    }

    return resData.places;
}

export async function updateUserPlaces(places){
     const response = await fetch('http://localhost:3000//user-places', {
        method : 'PUT',
        body : JSON.stringify(places),
        headers : {
            'content-type' : 'appliction/json'
        }
    })
    const resData = await response.json();

    if(!response.ok){
        throw new Error('Faild to update user data.');
    }

    return resData.message;
}