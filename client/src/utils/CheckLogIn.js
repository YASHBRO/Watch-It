const CheckLogIn = () => {
    const userId = localStorage.getItem("UserId");
    if (userId) {
        return userId;
    } else {
        return false;
    }
};

export default CheckLogIn;
