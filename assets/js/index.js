// قائمة التنقل عند الشاشات الصغيرة

const offcanvasEnd = document.querySelector(".offcanvas-end");
const navbarToggler = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");

offcanvasBackdrop.addEventListener("click", function (e) {
  offcanvasBackdrop.classList.add("fade");
  offcanvasBackdrop.classList.remove("show");
  offcanvasEnd.style.transform = "translateX(100%)";
  document.body.style.overflow = "auto";
  offcanvasBackdrop.style.display = "none";
});

navbarToggler.addEventListener("click", function (e) {
  offcanvasEnd.classList.add("show");
  offcanvasEnd.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
  offcanvasBackdrop.style.display = "block";
  offcanvasBackdrop.classList.add("show");
  offcanvasBackdrop.classList.remove("fade");
});

btnClose.addEventListener("click", function (e) {
  offcanvasEnd.style.transform = "translateX(100%)";
  offcanvasBackdrop.classList.add("fade");
  offcanvasBackdrop.classList.remove("show");
  offcanvasBackdrop.style.display = "none";
  document.body.style.overflow = "auto";
});

// قسم المجربون كود التنقل

var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ألية الدفع paypal4

function initPayPalButton() {
  paypal
    .Buttons({
      style: {
        shape: "pill",
        color: "gold",
        layout: "vertical",
        label: "paypal",
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{ amount: { currency_code: "USD", value: 1 } }],
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          // Full available details
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );

          // // Show a success message within this page, e.g.
     
          actions.redirect("/thank_you.html");

          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      },

      onError: function (err) {
        alert("حدث خطأ في الدفع أعد المحاولة");
        console.log(err);
      },
    })
    .render("#paypal-button-container");
}
initPayPalButton();

// // old code
// const fundingSources = [
//   paypal.FUNDING.PAYPAL,
//   paypal.FUNDING.PAYLATER,
//   paypal.FUNDING.CARD,
// ];

// for (const fundingSource of fundingSources) {
//   const paypalButtonsComponent = paypal.Buttons({
//     fundingSource: fundingSource,

//     // optional styling for buttons
//     // https://developer.paypal.com/docs/checkout/standard/customize/buttons-style-guide/
//     style: {
//       shape: "rect",
//       height: 40,
//     },

//     // set up the transaction
//     createOrder: (data, actions) => {
//       // pass in any options from the v2 orders create call:
//       // https://developer.paypal.com/api/orders/v2/#orders-create-request-body
//       const createOrderPayload = {
//         purchase_units: [
//           {
//             amount: {
//               // هي لتغير سعر الدايت (السعر بالدولار)
//               value: "37.99",
//             },
//           },
//         ],
//       };

//       return actions.order.create(createOrderPayload);
//     },

//     // finalize the transaction
//     onApprove: (data, actions) => {
//       const captureOrderHandler = (details) => {
//         const payerName = details.payer.name.given_name;
//         console.log("Transaction completed!");
//         actions.redirect("thank_you.html");
//       };

//       return actions.order.capture().then(captureOrderHandler);
//     },

//     // handle unrecoverable errors
//     onError: (err) => {
//       console.error(
//         "An error prevented the buyer from checking out with PayPal"
//       );
//       alert("حدث خطأ في الدفع أعد المحاولة");
//     },
//   });

//   if (paypalButtonsComponent.isEligible()) {
//     paypalButtonsComponent.render("#paypal-button-container").catch((err) => {
//       console.error("PayPal Buttons failed to render");
//     });
//   } else {
//     console.log("The funding source is ineligible");
//   }
// }

// my javascript for the website
const btnSecricbe = document.querySelector(".btn-secricbe");
const btnMain = document.querySelector(".btn-main");
const dialog = document.querySelector(".dialog");
const dialogMessage = document.querySelector(".message");
const btnConfirm = document.querySelector(".btn_confirm");
const btnUp = document.querySelector(".btn_up");
const socialMedia = document.querySelector(".float-social-media");

btnMain.addEventListener("click", () => {
  dialog.style.display = "block";
  dialogMessage.style.display = "block";

  setTimeout(() => {
    dialog.classList.remove("hidden");
    dialogMessage.classList.remove("hidden");
  }, 0);
});

btnSecricbe.addEventListener("click", () => {
  dialog.style.display = "block";
  dialogMessage.style.display = "block";

  setTimeout(() => {
    dialog.classList.remove("hidden");
    dialogMessage.classList.remove("hidden");
  }, 0);
});

btnConfirm.addEventListener("click", () => {
  dialog.classList.add("hidden");
  dialogMessage.classList.add("hidden");
  setTimeout(() => {
    dialog.style.display = "none";
    dialogMessage.style.display = "none";
  }, 300);
});

dialog.addEventListener("click", () => {
  dialog.classList.add("hidden");
  dialogMessage.classList.add("hidden");
  setTimeout(() => {
    dialog.style.display = "none";
    dialogMessage.style.display = "none";
  }, 300);
});

window.onscroll = function () {
  if (scrollY >= 500) {
    socialMedia.classList.remove("hidden");
  } else {
    socialMedia.classList.add("hidden");
  }

  if (scrollY >= 1000) {
    btnUp.classList.remove("hidden");
  } else {
    btnUp.classList.add("hidden");
  }
};

btnUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Scroll Reavel

const sr = ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 400,
  // rest: true
});
sr.reveal(".img-container", { origin: "left" });
sr.reveal(".hero-content", { delay: 1000 });
sr.reveal(".who-im-content", { origin: "right" });
sr.reveal(".youtube", { origin: "left" });
sr.reveal(".row-1", { delay: 300 });
sr.reveal(".row-2", { delay: 600 });
sr.reveal(".row-3", { delay: 900 });
sr.reveal(".row-4", { delay: 1200 });
sr.reveal(".row-5", { delay: 1600 });
sr.reveal(".card-1", { delay: 500 });
sr.reveal(".card-2", { delay: 1500 });
sr.reveal(".card-3", { delay: 2500 });
sr.reveal(".item-1", { delay: 300 });
sr.reveal(".item-2", { delay: 600 });
sr.reveal(".item-3", { delay: 900 });
sr.reveal(".item-4", { delay: 1200 });
sr.reveal(".item-5", { delay: 1500 });
sr.reveal(".item-6", { delay: 1800 });

ScrollReveal({ distance: "0px" }).reveal(".section_header");
