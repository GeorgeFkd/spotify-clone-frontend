import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Avatar } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router";
import ProfileDropDownOption from "./ProfileDropDownOption";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import "./AppTopBar.css";
function AppTopBar() {
    let history = useHistory();
    const handleClick = () => {
        setdrowpdownOpen(!drowpdownOpen);
    };
    const [drowpdownOpen, setdrowpdownOpen] = useState(false);
    return (
        <div className="mainpage__top">
            <div className="navigation">
                <NavigateBeforeIcon
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "gray",
                    }}
                    onClick={history.goBack}
                />
                <NavigateNextIcon
                    style={{
                        marginLeft: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "gray",
                    }}
                    onClick={history.goForward}
                />
            </div>
            <div className="mainpage__top__buttons">
                <Chip label="Αναβάθμιση" />
                <Chip
                    avatar={<Avatar />}
                    label="GeonF"
                    onDelete={handleClick}
                    deleteIcon={
                        drowpdownOpen ? (
                            <ArrowDropUpIcon />
                        ) : (
                            <ArrowDropDownIcon />
                        )
                    }
                />
                {/* fix this with css animation somehow */}
                {drowpdownOpen ? (
                    <div className="mainpage__profile__dropdown">
                        <div className="dropdownOptions">
                            <ProfileDropDownOption
                                text="Λογαριασμός"
                                Icon={OpenInNewIcon}
                            />
                            <ProfileDropDownOption
                                text="Προφίλ"
                                Icon={OpenInNewIcon}
                            />
                            <ProfileDropDownOption
                                text="Αποσύνδεση"
                                Icon={OpenInNewIcon}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default AppTopBar;
