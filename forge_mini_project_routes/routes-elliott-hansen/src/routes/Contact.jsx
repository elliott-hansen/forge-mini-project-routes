import "../css/Contact.css";

export const Contact = ({}) => {
    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>

            <p>
                Leave me a message!
            </p>

            <div className="contact-area">
                <textarea className="message-box">
                
                </textarea>
                <button type='submit'> Submit </button>
            </div>
        </>
    )
}