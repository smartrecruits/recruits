const saveInterviewee = (uid) => {
    localStorage.setItem('uid', uid.toString());
};
const saveRecruiter = (uid) => {
    localStorage.setItem('uid', uid.toString());
};

const getInterviewee = () => {
    const uid = localStorage.getItem('uid');
    return uid ? parseInt(uid) : null;
};
const getRecruiter = () => {
    const uid = localStorage.getItem('uid');
    return uid ? parseInt(uid) : null;
};

const removeRecruiter = () => {
    localStorage.removeItem('uid');
};

const removeInterviewee = () => {
    localStorage.removeItem('uid');
};

const isIntervieweeLoggedIn = () => {
    return !!getIntervieweeToken();
};

const isRecruiterLoggedIn = () => {
    return !!getRecruiterToken();
    };
const storeRecruiterToken = (token) => {
    localStorage.setItem('token', token);
};
const storeIntervieweeToken = (token) => {
    localStorage.setItem('token', token);
};
export function removeIntervieweeToken() {
    localStorage.removeItem("token");
}
export function removeRecruiterToken() {
    localStorage.removeItem("token");
}
const getIntervieweeToken = () => {
    return localStorage.getItem('token');
};
const getRecruiterToken = () => {
    return localStorage.getItem('token');
};
  
export { saveInterviewee, saveRecruiter, getInterviewee, getRecruiter, removeRecruiter, removeInterviewee, isRecruiterLoggedIn, isIntervieweeLoggedIn, storeRecruiterToken, storeIntervieweeToken, getRecruiterToken,getIntervieweeToken };