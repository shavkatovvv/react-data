import React from "react";
import { Header } from "./layout/header";
import { data } from "./data";
import room from "../src/assets/room.svg";

function App() {
    return (
        <>
            <div className="body">
                <div className="container">
                    <Header />

                    <ul className="item__wrapper">
                        {data.map((item) => {
                            return (
                                <li key={item.id} className="itemss">
                                    <img src={room} alt="img" />
                                    <div className="wrapper">
                                        <h2 className="item__title">
                                            {item.title}
                                        </h2>
                                        <span className="item_rate">
                                            {item.rate}
                                        </span>
                                    </div>

                                    <p className="item__prod">{item.prod}</p>
                                    <p className="item__date">{item.date}</p>
                                    <span className="item__price">
                                        {item.price}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
