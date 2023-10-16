import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "this is updated text value" wrong way to change the state
    // setText("This is new updated text") right way to change the state

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = (event) => {
        // console.log("Onchange is fired");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnchange = (event) => {
        // console.log("Onchange is fired");
        setText(event.target.value);
    }

    // const [fdata, setfdata] = useState("");
    const handleClear = () => {
        let newText = "";
        setText(newText);
    };

    const handleSentence = () => {
        let newText = text.charAt(0," ").toUpperCase() + text.slice(1);
        // let newText = text.replace(/^./, text[0].toUpperCase());
        setText(newText); 
    };

    const handleCapital = () => {
        const Sentence = text;
        const words = Sentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        
        console.log(words)
        let fullText = words.join(" ");
        setText(fullText);

    //    let utext = words.map((x) => {
    //         return x[0].toUpperCase() + x.substring(1);
    //     }).join(" ");

    //     setText(utext)
        
    }

    const handleCopy = () => {
        let copy = document.getElementById("myBox");
        // let copy = text;
        copy.select();
       
        // navigator.clipboard.writeText(copy);
        navigator.clipboard.writeText(copy.value);
        alert("text copied")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "));
    }
    

    return (<>

        <div className="container mt-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <div className="mb-3 col-sm-10 offset-sm-1">
                <div className='mb-3'>
                    <h3 className='mb-3' >To convert text, write below</h3>
                    <textarea className="form-control" value={text}
                    style={{ background: props.mode === 'light' ? 'white' : '#3e4951', color: props.mode === 'light' ? 'black' : 'white'}}
                        onChange={handleOnchange}
                        id="myBox" rows="4" column="5" placeholder='Enter the text here...' autoFocus></textarea>
                </div>
                <div className="mt-3 d-flex flex-wrap">
                    <button onClick={handleUpClick} className=" btn btn-success m-1">Convert to  Uppercase</button>
                    <button onClick={handleLowClick} className=" btn btn-success m-1">Convert to  Lowercase</button>
                    <button onClick={handleClear} className=" btn btn-success m-1">Clear</button>
                    <button onClick={handleSentence} className=" btn btn-success m-1">Sentence Case</button>
                    <button onClick={handleCapital} className=" btn btn-success m-1">Capitalized Case</button>
                    <button onClick={handleCopy} className=" btn btn-success m-1">Copy text</button>
                    <button onClick={handleExtraSpaces} className=" btn btn-success m-1">Remove ExtraSpaces</button>
                    
                </div>
                <div className=" my-3">
                    <h3>Your Text Summary</h3>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                </div>
                <div className="my-3">
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </>
    )
}
