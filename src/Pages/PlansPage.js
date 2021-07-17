import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubcription,
  selectSubscription,
  selectUser
} from "../features/userSlice";

import db from "../firebase";

import { loadStripe } from "@stripe/stripe-js";

import "./PlansPage.css";

const PlansPage = () => {
  const [products, setProducts] = useState({});

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          dispatch(
            addSubcription({
              role: subscription.data().role,
              current_period_end:
                subscription.data().current_period_end.seconds,
              current_period_start:
                subscription.data().current_period_start.seconds
            })
          );
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        let products = {};

        querySnapshot.forEach(async (productDoc) => {
          console.log(productDoc);
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();

          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            };
          });
        });

        setProducts(products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        // show an error to customer
        // inspect cloud function logs in Friebase console
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // if have a session, redirect to checkout
        // init Stripe
        const stripe = await loadStripe(
          "pk_test_51HWpYQH2fzynofDriYjIsFrL0daSIqb7R58bzaTS6coT440DjAhIGOw5x5T5GjiDa3fnVkt8mhW3OsOFCnZOyzMA00FUkYdvfw"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  console.log("subscription", subscription);

  return (
    <div className="plansPage">
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            className={`${
              isCurrentPackage && "plansPage__plan--disable"
            } plansPage__plan`}
            key={productId}
          >
            <div className="plansPage__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansPage;
