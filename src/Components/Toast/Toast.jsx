import "./Toast.css";

function Toast(props) {
  const showNotification = props.show;
  const notificationDetails = props.details;

  return (
    <div>
      {showNotification === true && (
        <div className="notificationContainer">
          <div className="notification">
            <h4>{notificationDetails.title}</h4>
          </div>
          <div className="notficaitonDescription">
            {notificationDetails.description}
          </div>
        </div>
      )}
    </div>
  );
}
export default Toast;
