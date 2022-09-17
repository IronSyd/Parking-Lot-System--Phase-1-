let bookButton = Array.from(document.querySelectorAll("button"));
const Slot1 = document.getElementById("Slot1");
const Slot2 = document.getElementById("Slot2");
const Slot3 = document.getElementById("Slot3");
const Slot4 = document.getElementById("Slot4");
const Slot5 = document.getElementById("Slot5");
const Slot6 = document.getElementById("Slot6");
const Slot7 = document.getElementById("Slot7");
const Slot8 = document.getElementById("Slot8");
const Slot9 = document.getElementById("Slot9");
const Slot10 = document.getElementById("Slot10");
const Slot11 = document.getElementById("Slot11");
const Slot12 = document.getElementById("Slot12");
const Slot13 = document.getElementById("Slot13");
const Slot14 = document.getElementById("Slot14");
const Slot15 = document.getElementById("Slot15");
const Slot16 = document.getElementById("Slot16");
const Slot17 = document.getElementById("Slot17");
const Slot18 = document.getElementById("Slot18");
const Slot19 = document.getElementById("Slot19");
const Slot20 = document.getElementById("Slot20");
const _numberOfBookedSlots = document.getElementById("BookedSlotsCounter");
let numberOfBookedSlots = 0;

bookButton.map((bookButton) => {
  bookButton.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Slot1":
        if (Slot1.className != "unBooked") {
          numberOfBookedSlots--; /* If already booked */
          Slot1.className = "unBooked";
          alert(`You have Unbooked ${e.target.innerText}`);
        } else {
          /* If space not booked */
          numberOfBookedSlots++;
          Slot1.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;

      case "Slot2":
        if (Slot2.className != "unBooked") {
          numberOfBookedSlots--;
          Slot2.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot2.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot3":
        if (Slot3.className != "unBooked") {
          numberOfBookedSlots--;
          Slot3.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot3.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot4":
        if (Slot4.className != "unBooked") {
          numberOfBookedSlots--;
          Slot4.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot4.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot5":
        if (Slot5.className != "unBooked") {
          numberOfBookedSlots--;
          Slot5.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot5.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;

      case "Slot6":
        if (Slot6.className != "unBooked") {
          numberOfBookedSlots--;
          Slot6.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot6.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot7":
        if (Slot7.className != "unBooked") {
          numberOfBookedSlots--;
          Slot7.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot7.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot8":
        if (Slot8.className != "unBooked") {
          numberOfBookedSlots--;
          Slot8.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot8.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot9":
        if (Slot9.className != "unBooked") {
          numberOfBookedSlots--;
          Slot9.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot9.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot10":
        if (Slot10.className != "unBooked") {
          numberOfBookedSlots--;
          Slot10.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot10.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;

      case "Slot11":
        if (Slot11.className != "unBooked") {
          numberOfBookedSlots--;
          Slot11.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot11.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot12":
        if (Slot12.className != "unBooked") {
          numberOfBookedSlots--;
          Slot12.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot12.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot13":
        if (Slot13.className != "unBooked") {
          numberOfBookedSlots--;
          Slot13.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot13.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot14":
        if (Slot14.className != "unBooked") {
          numberOfBookedSlots--;
          Slot14.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot14.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot15":
        if (Slot15.className != "unBooked") {
          numberOfBookedSlots--;
          Slot15.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot15.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;

      case "Slot16":
        if (Slot16.className != "unBooked") {
          numberOfBookedSlots--;
          Slot16.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot16.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot17":
        if (Slot17.className != "unBooked") {
          numberOfBookedSlots--;
          Slot17.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot17.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot18":
        if (Slot18.className != "unBooked") {
          numberOfBookedSlots--;
          Slot18.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot18.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot19":
        if (Slot19.className != "unBooked") {
          numberOfBookedSlots--;
          Slot19.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot19.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
      case "Slot20":
        if (Slot20.className != "unBooked") {
          numberOfBookedSlots--;
          Slot20.className = "unBooked";
          alert(`You Have Unbooked ${e.target.innerText}`);
        } else {
          numberOfBookedSlots++;
          Slot20.className = "booked";
          alert(`Thank You For Booking ${e.target.innerText}`);
        }
        break;
    }
  });
});
