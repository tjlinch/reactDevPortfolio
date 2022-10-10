import React from 'react'

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
                <input type='text' name='message' />
            </label><br></br>
            <input type='submit' value='Submit' />
        </form>
    </div>
  );
}
