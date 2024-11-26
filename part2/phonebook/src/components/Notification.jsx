
const Notification = ({message, notificationColor}) => {
    const messageStyle = {
        color: notificationColor,
        background: 'lightgrey',
        fontSize: 20,
        // paddingTop: 5,
        // paddingBottom: 5,
        // paddingLeft: 15,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20

    }
    if(message !== null) {
        return(
            <>
                <div style={messageStyle}>{message}</div>
                {/* <br /> */}
            </>
        )
    }
}

export default Notification