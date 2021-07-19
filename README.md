# XFLIX
_Created by_ [Jay Tran](https://jaytranuts.herokuapp.com/) - [Live  Site](https://xflix-69c66.web.app)

![](public/images/XFlix_demo.gif)

#### Table of Contents - [XFLIX](#XFLIX)
  - [Table of Contents](#table-of-contents)
  - [Non-Technical Overview](#non-technical-overview)
  - [Core Features:](#core-features)
  - [Technical Overview](#technical-overview)

## Non-Technical Overview
XFlix is simplified version of NetFlix. It was created using React, and Firebase (hosting, authentication). XFlix also integrated with payment system with Firebase Stripe extension, which enable users to make payment via Stripe. The movies list was sourced from The MovieDB APIs fro frontend display and details.
#### Core Features
* Login, logout and create a new account. 
* Access to the list of movies.
* Controlled access to paid contents.
* Search, add, remove movie from the wished list.
*  Make a payment with Stripe.
## Technical Overview
XFlix is focused for following considerations:
1. Design elegant UX without having a designer by leveraging open source UI libraries
2. Adhered to React and ES6 best practices to generate a true single page reactive web app experience.
3. Controlled access to paid content by syncing subscriptions with Firebase Authentication.
4. APIs from TMDB provided movies list from various categories depends upon different queries
### Stripe test number account:
<img src="https://res.cloudinary.com/dqcwg27r8/image/upload/v1626712000/stripe_payment_zgsrnj.png" alt="stripe payment">

* Card number: 4242 4242 4242 4242
* MM/YY: 04 / 24
* CVC: 242
* ZIP: 42424