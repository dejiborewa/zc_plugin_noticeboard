import React from "react";
import CancelNoticeBtn from "./CancelNoticeBtn";
import "./ViewNotice.css";
import AdminMenu from "../noticeBoardComponent/AdminNoticeMenu";
import dot from "../../../assets/Ellipse135.svg";

const ViewNoticeModal = ({ persons, closeModal }) => {
  const cancelBtn = () => {
    const modalCard = document.getElementById("modal");
    const contain = document.getElementById("contain");
    modalCard.classList.add("none");
    contain.classList.add("none");
    closeModal(false);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal(false);
    }
  });

  const getMonthName = (month) => {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("default", { month: "short" });
    return monthName;
  };

  return (
    <div className="contain" id="contain">
      {persons.map((person) => {
        return (
          <div className="modal-card" id="modal" key={person._id}>
            <div className="user-details-menu-flex">
              <div className="img-and-name-container">
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="user-picture"
                  />
                </div>
                <div className="name-time">
                  <div className="time-stamps">
                    <p className="date-stamp stamp-one">{`${getMonthName(
                      Number(person.created.substring(5, 7))
                    )} ${person.created.substring(
                      8,
                      10
                    )} ${person.created.substring(0, 4)}`}</p>
                    <p className="dot">
                      <img src={dot} alt="" />
                    </p>
                    <p className="date-stamp stamp-two">
                      {person.created.substring(11, 20)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="admin-menu-container">
                <AdminMenu noticeID={person._id} />
              </div>
            </div>

            <h2 className="modal-title">
              {person.title.replace(/<[^>]+>/g, "")}
            </h2>
            <p className="modal-info">
              {person.message.replace(/<[^>]+>/g, "")}
            </p>
            <div>
              <img
                src="https://res.cloudinary.com/clefayomide/image/upload/v1630517027/dummy-img.svg"
                alt="belle cosmetics"
                className="dummy-img"
              />
              <CancelNoticeBtn onClick={cancelBtn} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewNoticeModal;
