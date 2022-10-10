import React from 'react';

const styles = {
    messageInput: {
        width: '200%',
        height: '200px',
    },
    submit: {
        backgroundColor: 'red',
    }
}

export default function Contact() {
  return (
    <div>
        <h3>Contact Me</h3>
        <form>
            <label>
                Name:
                <input type='text' name='name' />
            </label><br></br>
            <label>
                Email:
                <input type='text' name='email' />
            </label><br></br>
            <label>
                Message:
                <input type='text' name='message' style={styles.messageInput} />
            </label><br></br>
            <input type='submit' value='Submit' style={styles.submit}/>
        </form>
    </div>
  );
}
