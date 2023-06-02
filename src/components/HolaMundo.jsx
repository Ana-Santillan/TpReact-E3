import {useState } from "react";

const HolaMundo = () => {
    const [mensaje, setMensaje] = useState("");

    const clickMe = () =>{
        if(mensaje!=""){
            setMensaje("")
        }else{
            setMensaje("(from changed state)")
        }
    }

    return (
        <section className="text-center my-5">
            <h1>Hello my friend {mensaje}</h1>
            <button className="btn btn-primary" onClick={clickMe}>Click me</button>
        </section>
    );
};

export default HolaMundo;