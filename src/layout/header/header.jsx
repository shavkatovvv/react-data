import React from "react";
import style from "./style.module.css"
import logo from "../../assets/logo.svg";
import global from "../../assets/global.svg"
import list from "../../assets/list.svg"


export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.box}>

             <div className={style.wrapper}>
                
                <div className={style.img_block}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={style.mid}>
                    <p className={style.first_text}>Anywhere</p>
                    <div className={style.line_first}></div>
                    <p className={style.two_text}>Any week</p>
                    <div className={style.two_first}></div>
                    <p className={style.third_text}>Add guests</p>
                </div>


                <div className={style.last}>
                    <p className={style.title}>Airbnb your home</p>

                    <img src={global} alt="" />
                </div>
            </div>
                
            </div>


            <div className={style.second}>
                <div className={style.block_wrapper}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Amazing views</p>
                    </li>

                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Lakefront</p>
                    </li>

                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Caves</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>OMG!</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Earth homes</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Treehouses</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Mansions</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Cabins</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Amazing pools</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Islands</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Beachfront</p>
                    </li>


                    <li className={style.item}>
                        <img src={list} alt="list" />
                        <p className={style.item_text}>Trending</p>
                    </li>
                </ul>

                <div className={style.round}>

                </div>

                <div className={style.right}>
                    <p className={style.right_text}>Filters</p>
                </div>
                </div>
                
            </div>


            <div className={style.third_block}>
                <div className={style.block__th}>
                    <p className={style.th_text}>Display total price</p>
                    <div className={style.th_line}></div>
                    <p className={style.d_text}>Includes all fees, before taxes</p>
                </div>
            </div>
        </header>
    )
}