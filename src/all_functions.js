import firebase from "firebase/app";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();


//<-----------SignUp New Users with EmailAndPassword-------------->
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
//<-------------------SignIN Existing Users --------------------->
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

//<--------------------Set an authentication state observer and get user data------------>
/*For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.

Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer.*/
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

//You can also get the currently signed-in user by using the currentUser property. If a user isn't signed in, currentUser is null:
const user = firebase.auth().currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}

//<-----------Get a user's profile------------->
const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getIdToken() instead.
  const uid = user.uid;
}
  
//<-----------Get a user's provider-specific profile information-------------->
const user = firebase.auth().currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


//<-----------Update a user's profile------------------------>
const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});  


//<---------------Set a user's email address--------->
const user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});


//<---------------Send a user a verification email---------->
firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });



//<---------Set a user's password------------------->
const user = firebase.auth().currentUser;
const newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});



//<-------------Send a password reset email------->
firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });



//<--------------Delete a user---------------->
const user = firebase.auth().currentUser;

user.delete().then(() => {
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});



//<--------------Re-authenticate a user-------------->
/*Some security-sensitive actions—such as deleting an account, setting a primary email address, and changing a password—require that the user has recently signed in. If you perform one of these actions, and the user signed in too long ago, the action fails with an error. When this happens, re-authenticate the user by getting new sign-in credentials from the user and passing the credentials to reauthenticateWithCredential. For example:*/
const user = firebase.auth().currentUser;

// TODO(you): prompt the user to re-provide their sign-in credentials
const credential = promptForCredentials();

user.reauthenticateWithCredential(credential).then(() => {
  // User re-authenticated.
}).catch((error) => {
  // An error ocurred
  // ...
});



//<----------------SignOut user----------------------->
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


//<<<<<-----Phone number SignIn --------->>>>>>>
const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

//<---If signInWithPhoneNumber results in an error, reset the reCAPTCHA so the user can try again:--->
grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
window.recaptchaVerifier.render().then(function(widgetId) {
  grecaptcha.reset(widgetId);
}

//<----------Confirmation code------------>
const code = getCodeFromUserInput();
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});



//<<<<<<<<<<<<-----------Link Multiple Auth Providers--------------->>>>>>>>>>>>>
var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
var twitterProvider = new firebase.auth.TwitterAuthProvider();
var githubProvider = new firebase.auth.GithubAuthProvider();

//<---Link with Popup------->
auth.currentUser.linkWithPopup(provider).then((result) => {
  // Accounts successfully linked.
  var credential = result.credential;
  var user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  // ...
});

//<---Link with Redirect------->
auth.currentUser.linkWithRedirect(provider)
  .then(/* ... */)
  .catch(/* ... */);

//<-----Get SignIn results after Redirected back to your page----->
auth.getRedirectResult().then((result) => {
  if (result.credential) {
    // Accounts successfully linked.
    var credential = result.credential;
    var user = result.user;
    // ...
  }
}).catch((error) => {
  // Handle Errors here.
  // ...
});

//<-------------------------Linking accounts sample code---------------------------------->
// The implementation of how you store your user data depends on your application
var repo = new MyUserDataRepo();

// Get reference to the currently signed-in user
var prevUser = auth.currentUser;

// Get the data which you will want to merge. This should be done now
// while the app is still signed in as this user.
var prevUserData = repo.get(prevUser);

// Delete the user's data now, we will restore it if the merge fails
repo.delete(prevUser);

// Sign in user with the account you want to link to
auth.signInWithCredential(newCredential).then((result) => {
  console.log("Sign In Success", result);
  var currentUser = result.user;
  var currentUserData = repo.get(currentUser);

  // Merge prevUser and currentUser data stored in Firebase.
  // Note: How you handle this is specific to your application
  var mergedData = repo.merge(prevUserData, currentUserData);

  return prevUser.linkWithCredential(result.credential)
    .then((linkResult) => {
      // Sign in with the newly linked credential
      return auth.signInWithCredential(linkResult.credential);
    })
    .then((signInResult) => {
      // Save the merged data to the new user
      repo.set(signInResult.user, mergedData);
    });
}).catch((error) => {
  // If there are errors we want to undo the data merge/deletion
  console.log("Sign In Error", error);
  repo.set(prevUser, prevUserData);
});


//<<<<----------Link email address and password credentials to a user account-------->>>>
var credential = firebase.auth.EmailAuthProvider.credential(email, password);

auth.currentUser.linkWithCredential(credential)
  .then((usercred) => {
    var user = usercred.user;
    console.log("Account linking success", user);
  }).catch((error) => {
    console.log("Account linking error", error);
  });


//<<<-------------Unlink an auth provider from a user account------------>>>>
user.unlink(providerId).then(() => {
  // Auth provider unlinked from account
  // ...
}).catch((error) => {
  // An error happened
  // ...
});

let providerData = self.currentUser?.providerData else {return}
        var providerArray: [String] = []
        for provider in providerData{
            providerArray.append(provider as! String)
        }
        var providerID: String = providerArray["Facebook"]
        FIRAuth.auth()?.currentUser?.unlink(fromProvider: "facebook.com" ) { (user, error) in



//<<<<<<<<<<<<<=========Custom Claims with Admin Auth===========>>>>>>>>>
//<<<<=============Set and validate custom user claims via the Admin SDK=========>>>>

// Set admin privilege on the user corresponding to uid.

getAuth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
  });

//<----------An ID token sent to a backend server can confirm the user's identity and access level using the Admin SDK as follows:--->
// Verify the ID token first.
getAuth()
  .verifyIdToken(idToken)
  .then((claims) => {
    if (claims.admin === true) {
      // Allow access to requested admin resource.
    }
  });

//<------You can also check a user's existing custom claims, which are available as a property on the user object:------>
// Lookup the user associated with the specified uid.
getAuth()
  .getUser(uid)
  .then((userRecord) => {
    // The claims can be accessed on the user record.
    console.log(userRecord.customClaims['admin']);
  });
//You can delete a user's custom claims by passing null for customClaims.

//<<----[Javascript] Once the latest claims have propagated to a user's ID token, you can get them by retrieving the ID token:------>>
firebase.auth().currentUser.getIdTokenResult()
  .then((idTokenResult) => {
     // Confirm the user is an Admin.
     if (!!idTokenResult.claims.admin) {
       // Show admin UI.
       showAdminUI();
     } else {
       // Show regular user UI.
       showRegularUI();
     }
  })
  .catch((error) => {
    console.log(error);
  });

//<<<-------Client side implementation (JavaScript)-------->>>
//<<<<<<<<<<< Defining roles via Firebase Functions on user creation >>>>>>>>>
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.catch(error => {
  console.log(error);
});

let callback = null;
let metadataRef = null;
firebase.auth().onAuthStateChanged(user => {
  // Remove previous listener.
  if (callback) {
    metadataRef.off('value', callback);
  }
  // On user login add new listener.
  if (user) {
    // Check if refresh is required.
    metadataRef = firebase.database().ref('metadata/' + user.uid + '/refreshTime');
    callback = (snapshot) => {
      // Force refresh to pick up the latest custom claims changes.
      // Note this is always triggered on first call. Further optimization could be
      // added to avoid the initial trigger when the token is issued and already contains
      // the latest claims.
      user.getIdToken(true);
    };
    // Subscribe new listener to changes on that node.
    metadataRef.on('value', callback);
  }
});

//<<<-------------Cloud Functions logic----------->>>
const functions = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getDatabase } = require('firebase-admin/database');

initializeApp();

// On sign up.
exports.processSignUp = functions.auth.user().onCreate(async (user) => {
  // Check if user meets role criteria.
  if (
    user.email &&
    user.email.endsWith('@admin.example.com') &&
    user.emailVerified
  ) {
    const customClaims = {
      admin: true,
      accessLevel: 9
    };

    try {
      // Set custom user claims on this newly created user.
      await getAuth().setCustomUserClaims(user.uid, customClaims);

      // Update real-time database to notify client to force refresh.
      const metadataRef = getDatabase().ref('metadata/' + user.uid);

      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      await  metadataRef.set({refreshTime: new Date().getTime()});
    } catch (error) {
      console.log(error);
    }
  }
});