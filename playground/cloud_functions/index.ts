import * as functions from 'firebase-functions'
// import * as admin from 'firebase-admin';

// this is happening ASYNCHRONOUSLY
export const cleanUpNewReviews = functions.firestore
    .document(`resturans/{resturantID}/ratings/{reviewID}`)
    .onWrite((change, context) => {
        const reviewData = change.after.data(); // getting review data
        if (reviewData) {
            const reviewText = reviewData.text; // getting data text
            const updatedText = removeSwearWords(reviewText);

            if (reviewText === updatedText) {
                console.log('I have nothing to do!');
                return null;
            }

            return change.after.ref.update({ text: updatedText }).then(() => {
                console.log('Text was updated!');
            }) // immediately return a Promise
        } else {
            return null;
        }
    });

const removeSwearWords = (text) => {
    const re = /fat\-free cheese/gi;
    const cleanedText = text.replace(re, 'cheese');
    return cleanedText;
};
