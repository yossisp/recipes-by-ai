import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function submitForm(event) {
    event.preventDefault();
    console.log(event.target)
}

export default function FrontPageForm() {
    const [ingredients, setIngredients] = useState()
    const onTextAreaChange = (event) => {
        console.log(event.target.value)
        setIngredients(event.target.value)
    }

    return <form
        onSubmit={submitForm}
        method="POST"
        name="ingredients"
    >
        <label htmlFor="message" />
        <div className="flex-div">
            <textarea
                id="message"
                name="message"
                required
                maxLength="140"
                rows="3"
                placeholder="Enter ingredients..."
                style={{ zIndex: 9, width: '80%' }}
                onChange={onTextAreaChange}
            />
            <div className="button-div">
                <button type="submit" className={styles.card} style={{
                    color: 'white',
                    backgroundColor: 'green',
                    borderRadius: 3,
                    padding: 12
                }}>
                    <span style={{ fontSize: 20 }}>Generate</span>
                </button>
            </div>

        </div>
        <style jsx>{`
        div.flex-div {
            width: 500px;
            display: flex;
            align-items:center;
        }
        div.button-div {
            padding-left: 10px
        }
        @media screen and (max-width: 600px) {
            div.flex-div {
                flex-direction: column;
                width: 100vw;   
            }
            div.button-div {
                padding-top: 16px;
            }
        }
      `}   </style>
    </form >
}