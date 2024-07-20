import birthdayMessages from "../const/index.js";

const root = {
    birthdayMessages: () => birthdayMessages,
};

const getBirthdayMessages = () => {
    return birthdayMessages;
};

export { root, getBirthdayMessages }