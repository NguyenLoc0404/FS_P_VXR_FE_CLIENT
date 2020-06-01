import React from "react";

const Seat = (props) => {
  const { seat } = props;
  // console.log(" vo seat ============");
  // console.log(seat);
  const [isSelected, toogleSeat] = React.useState(false);
  const selectSeat = () => {
    const _isSelected = !isSelected;

    //Mở rộng , chỉ được boot 2 ghế liền nhau

    //thêm ghế mới vào những ghế ban đầu
    if (_isSelected) {
      const _selectedSeats = [...props.selectedSeats, seat];

      props.SetselectedSeats(_selectedSeats);
    } else {
      const _selectedSeats = props.selectedSeats.filter(
        (f) => f._id !== seat._id
      );
      props.SetselectedSeats(_selectedSeats);
    }
    //xu ly mau sac
    toogleSeat(_isSelected);
  };

  const renderSeatColor = () => {
    // Ghế đã được boot sẵn trong mảng
    if (seat.isBooked) return "secondary";

    //ghế đang chọn
    if (isSelected) return "success";

    return "outline-success";
  };
  return (
    <button
      className={`btn btn-${renderSeatColor()} m-2`}
      onClick={() => selectSeat()}
      disabled={seat.isBooked}
    >
      {props.seat.code}
    </button>
  );
};

export default Seat;
