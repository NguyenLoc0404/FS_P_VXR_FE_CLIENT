import React from 'react';
import { setCartApi } from "./../../actions/ticket";
import { connect } from "react-redux";
import TicketItem from "./TicketItem";
const Cart = (props) => {
    const [Tickets, SetTickets] = React.useState([]);
    React.useEffect(() => {
        console.log("useEffect TicketItem");
        console.log(props.match.params.userId);
        const id = props.match.params.userId;
        props.setCartApi(id);
    }, []);

    const RenderTickets = (Tickets) => {
        console.log("vao render tickets");
        console.log(Tickets);
        return Tickets.map((t, index) => {
            return (
                <TicketItem
                    ticket={t}
                    //key khác props, ko  thể mang key qua props được
                    // phải truyền bằng tham số khác
                    key={index}
                    index={index}
                //setTicket={setTicket}
                />
            );
        });
    };

    return (
        <div className="mi-5">
            <h4 className="fw-medium mb-3">Danh Sách Vé</h4>
            
            <div className="my-5 container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Bến Xe Đi</th>
                            <th>Bến Xe Đến</th>
                            <th>Tên Người Đặt</th>
                            <th>Ghế đã đặt</th>
                            <th>Tổng Tiền</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        props.Tickets && RenderTickets(props.Tickets)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Tickets: state.ticket.cart
    }
}
export default connect(mapStateToProps, { setCartApi })(Cart);